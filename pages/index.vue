<script>
export default {
  name: 'HomePage',

  async asyncData({ $content }) {
    const articles = await $content('articles').only(['title', 'path']).fetch()

    return { articles }
  },
}
</script>

<template>
  <main>
    <section>
      <h2>Articles</h2>
      <ul>
        <li v-for="article in articles" :key="article.path">
          <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
        </li>
      </ul>
    </section>

    <section>
      <h2>Experiments</h2>
      <ul>
        <li>
          <nuxt-link to="experiments/DynamicPreviewImage">
            Dynamic preview image
          </nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>
