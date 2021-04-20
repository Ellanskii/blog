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
        content: '/experiments/DynamicPreviewImage/fb.jpg',
      },
      {
        hid: 'vk:image',
        property: 'vk:image',
        content: '/experiments/DynamicPreviewImage/vk.jpg',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/experiments/DynamicPreviewImage/twitter.jpg',
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
    <h1>Whether the preview image can be inserted dynamically?</h1>
  </main>
</template>

<style lang="scss"></style>
