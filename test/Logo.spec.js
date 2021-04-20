import { mount } from '@vue/test-utils'
import TableOfContents from '~/components/TableOfContents'

describe('TableOfContents', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TableOfContents)
    expect(wrapper.vm).toBeTruthy()
  })
})
