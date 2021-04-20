import { mount } from '@vue/test-utils'
import TableOfContents from '~/components/TableOfContents'

const propsData = {
  toc: [
    { id: 'who-cares', depth: 2, text: 'Who cares?' },
    { id: 'benefits', depth: 2, text: 'Benefits' },
    { id: 'seo', depth: 3, text: 'SEO' },
    { id: 'reputation', depth: 3, text: 'Reputation' },
    { id: 'for-developers', depth: 3, text: 'For developers' },
    { id: 'conclusion', depth: 2, text: 'Conclusion' },
  ],
}

describe('TableOfContents', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TableOfContents, { propsData })
    expect(wrapper.vm).toBeTruthy()
  })
})
