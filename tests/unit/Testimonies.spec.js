import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import Testimonies from '@/components/Testimonies'
import TestimonyCarousel from "@/components/TestimonyCarousel";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Testimonies Section Component', () => {

    const wrapper = mount(Testimonies, {
        propsData: {
            testimoniesConfig: {
                testimony_section_title: "Look what people have to say about us!"
            },
        },
        localVue
    })

    it("renders component TestimonyCarousel", () => {
        expect(wrapper.findComponent(TestimonyCarousel).exists()).toBe(true)
    })

    it("passes props (testimoniesConfig and testimonies) properly", () => {
        expect(wrapper.props().testimoniesConfig.testimony_section_title).toBe('Look what people have to say about us!');
    })
})
