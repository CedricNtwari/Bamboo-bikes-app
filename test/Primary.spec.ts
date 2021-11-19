import { mount } from '@vue/test-utils'
import Primary from '@/components/Primary.vue'
import { Wrapper } from '@vue/test-utils'

describe('Primary', () => {
  it('renders a div', () => {
    const wrapper = mount(Primary)
    expect(wrapper.contains('div')).toBe(true)
  })
})

// describe('Primary', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Primary)
//     expect(wrapper.vm).toBeTruthy()
//   })
// })

// describe('Primary', () => {
//   let wrapper: Wrapper<Vue>

//   describe('when mounted', () => {
//     beforeEach(() => {
//       wrapper = shallowMount(Primary, {
//         title: 'title',
//         paragraphe: 'paragraphe',
//         button: 'button',
//       })
//     })

//     it('shows component', () => {
//       expect(wrapper.findComponent(Primary).exists()).toBe(true)
//     })
//   })
// })
