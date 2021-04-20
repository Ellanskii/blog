<script>
import TableOfContents from '~/components/TableOfContents.vue'

export default {
  name: 'ArticlePage',
  components: { TableOfContents },

  async asyncData({ $content, params, error }) {
    const article = await $content('articles', params.slug)
      .fetch()
      .catch(() => error({ statusCode: 404, message: 'Post not found' }))

    return { article }
  },

  data: () => ({}),

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

<template>
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <TableOfContents v-if="false" :toc="article.toc" />
    <h1>{{ article.title }}</h1>
    <NuxtContent :document="article" />
  </article>
</template>

<style lang="scss"></style>
