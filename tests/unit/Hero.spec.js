import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Hero from '@/components/Hero'
import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";
import YoutubeModal from "@/components/YoutubeModal";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.component('font-awesome', FontAwesomeIcon)
config.showDeprecationWarnings = false

describe('Hero Section Component', () => {

  let watchVideo = jest.fn()
  let learnMore = jest.fn()
  const wrapper = mount(Hero, {
    methods: {
      watchVideo,
      learnMore,
    },
    localVue
  })

  it("renders components GreenButton, WhiteButton, and YoutubeModal", () => {
    expect(wrapper.findComponent(GreenButton).exists()).toBe(true)
    expect(wrapper.findComponent(WhiteButton).exists()).toBe(true)
    expect(wrapper.findComponent(YoutubeModal).exists()).toBe(true)
  })

  it('calls watchVideo method when Watch button is clicked', () => {
    expect(watchVideo).not.toHaveBeenCalled()
    wrapper.findComponent(WhiteButton).trigger('click')
    expect(watchVideo).toHaveBeenCalled()
  })

  it('calls learnMore method when Learn More button is clicked', () => {
    expect(learnMore).not.toHaveBeenCalled()
    wrapper.findComponent(GreenButton).trigger('click')
    expect(learnMore).toHaveBeenCalled()
  })
})
