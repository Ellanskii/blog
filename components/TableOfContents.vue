<script>
export default {
  name: 'TableOfContents',

  props: {
    toc: {
      type: Array,
      required: true,
    },
  },

  data: () => ({}),

  computed: {
    // nested() {
    //   const parenter = {
    //     set(target, prop, value) {
    //       if (typeof value === 'object') {
    //         const p = new Proxy({ parent: target }, parenter)
    //         for (const key in value) {
    //           p[key] = value[key]
    //         }
    //         return (target[prop] = p)
    //       } else {
    //         target[prop] = value
    //       }
    //     },
    //   }

    //   const root = new Proxy([], parenter)
    //   const lastItem = {}
    //   return this.toc.reduce((result, current, index, array) => {
    //     if (current.depth > lastItem.depth) {
    //       // child
    //       lastItem.children = lastItem.children || []
    //       lastItem.children.push(current)
    //       // lastItem = current
    //     } else if (current.depth < lastItem.depth) {
    //       // parent
    //       lastItem.parent.children.push(current)
    //     } else {
    //       result.push(current)
    //     }
    //     return result
    //   }, root)
    // },
    nested() {
      const nestedToc = []

      let lastHeader = {}

      // const parenter = {
      //   set(target, prop, val) {
      //     // if (typeof val === 'object') {
      //     val.parent = lastHeader
      //     target[prop] = val
      //     return true
      //     // } else {
      //     //   return false
      //     // }
      //   },
      // }
      this.toc.forEach((element) => {
        const header = { ...element }
        // const children = new Proxy([], parenter)
        header.children = []

        if (header.depth > lastHeader.depth) {
          // children.push(header)
          header.parent = lastHeader
          lastHeader.children.push(header)
        } else {
          header.parent
            ? header.parent.children.push(header)
            : nestedToc.push(header)
        }
        lastHeader = header
      })

      return nestedToc
    },
  },
}
</script>

<template>
  <div class="toc">
    <ol class="toc-list">
      <TableOfContentsNode v-for="item in nested" :key="item.id" :node="item" />
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.toc {
  padding: 1rem;
  width: fit-content;
  display: flex;
  border: 1px solid gray;
}
.toc ::v-deep {
  .toc-list {
    counter-reset: item;
  }
  // .toc-list__item {
  //   display: block;
  // }
  // .toc-list__item:before {
  //   content: counters(item, '.') ' ';
  //   counter-increment: item;
  // }
}
</style>
