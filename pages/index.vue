<script>
export default {
  name: 'HomePage',

  async asyncData({ $content, params, error }) {
    const articles = await $content('articles').only(['title', 'slug']).fetch()

    return { articles }
  },
}
</script>

<template>
  <main>
    <section>
      <h2>Articles</h2>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
