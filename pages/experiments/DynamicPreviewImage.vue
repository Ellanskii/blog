<script>
export default {
  name: 'DynamicPreviewImage',

  data: () => ({
    metaImages: [],
    ogImage: {},
    twitterImage: {},
    vkImage: {},
  }),

  head() {
    return {
      title: 'Dynamic Preview Image',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Whether the preview image can be inserted dynamically? Let's clarify this`,
        },
        ...this.metaImages,
      ],
    }
  },

  mounted() {
    const images = [
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://ellanskii.github.io/blog/experiments/DynamicPreviewImage/fb.jpg',
      },
      {
        hid: 'vk:image',
        property: 'vk:image',
        content:
          'https://ellanskii.github.io/blog/experiments/DynamicPreviewImage/vk.jpg',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://ellanskii.github.io/blog/experiments/DynamicPreviewImage/twitter.jpg',
      },
      // { hid: 'og:whatsapp-image', property: 'og:image', content: whatsappImage },
      // { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      // { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      // { hid: 'fb:image:width', property: 'fb:image:width', content: '1200' },
      // { hid: 'fb:image:height', property: 'fb:image:height', content: '630' },
      // { hid: 'vk:image:width', property: 'vk:image:width', content: '1200' },
      // { hid: 'vk:image:height', property: 'vk:image:height', content: '540' },
    ]

    this.metaImages = images
  },
}
</script>

<template>
  <main>
    <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
      <h1>Whether the preview image can be inserted dynamically?</h1>
      <p>
        Is it possible to insert preview image meta-tags (`og:image`,
        `twitter:image` and `vk:image`) with js on the client? Let's clarify
        this
      </p>
      <h2>Motivation</h2>
      <p>
        It would be cool to parse the page extracting it meta-data from context
        after it's loaded.
      </p>
      <h2>Methodology</h2>
      <p>
        Information about meta-images is empty on server-side and fills on
        `mounted()` hook
      </p>
      <h2>Result</h2>
      <p>Doesn't work</p>
    </article>
  </main>
</template>

<style lang="scss"></style>
