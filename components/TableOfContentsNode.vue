<script>
export default {
  name: 'TableOfContentsNode',

  props: {
    node: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <li class="toc-list__item">
    <NuxtLink :to="`#${node.id}`">{{ node.text }}</NuxtLink>
    <ol v-if="node.children.length" class="toc-list">
      <TableOfContentsNode
        v-for="item of node.children"
        :key="item.id"
        :node="item"
      />
    </ol>
  </li>
</template>

<style lang="scss" scoped>
.toc-list__item .toc-list .toc-list__item {
  padding-left: 1rem;
}
.toc-list__item {
  display: block;
}
.toc-list__item:before {
  content: counters(item, '.') ' ';
  counter-increment: item;
}
</style>
