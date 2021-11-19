import Vue, { VueConstructor } from 'vue'
import {
  mount as mountVue,
  shallowMount as shallowMountVue,
  Wrapper,
  MountOptions,
  ShallowMountOptions,
} from '@vue/test-utils'

function factory(
  fn: (
    component: VueConstructor<Vue>,
    options?: MountOptions<Vue> | ShallowMountOptions<Vue>
  ) => Wrapper<Vue>
) {
  return (
    component: VueConstructor<Vue>,
    propsData?: Record<string, unknown>,
    options?: MountOptions<Vue> | ShallowMountOptions<Vue>
  ) =>
    fn(component, {
      propsData,
      ...options,
    })
}

export const shallowMount = factory(shallowMountVue)
export const mount = factory(mountVue)
