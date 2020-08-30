import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import FAQSection from '@/components/FAQSection'
import FAQItem from "@/components/FAQItem";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('FAQ Section Component', () => {

    const wrapper = mount(FAQSection, {
        localVue
    })

    it("renders component FAQItem properly", () => {
        expect(wrapper.findComponent(FAQItem).exists()).toBe(true)
    })
})
