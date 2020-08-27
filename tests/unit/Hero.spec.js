import { mount } from '@vue/test-utils'
import sinon from 'sinon'

import Hero from '@/components/Hero'

import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";
import YoutubeModal from "@/components/YoutubeModal";

describe('Hero Section Component', () => {
  it("renders GreenButton, WhiteButton, and YoutubeModal", () => {
    const wrapper = mount(Hero)

    expect(wrapper.findComponent(GreenButton).exists()).toBe(true)
    expect(wrapper.findComponent(WhiteButton).exists()).toBe(true)
    expect(wrapper.findComponent(YoutubeModal).exists()).toBe(true)
  })
  //add a test that checks if green button is clicked, the youtube modal shows up
})
