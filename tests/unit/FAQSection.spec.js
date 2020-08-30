import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import FAQSection from '@/components/FAQSection'
import FAQItem from "@/components/FAQItem";

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('FAQ Section Component', () => {

    const wrapper = mount(FAQSection, {
        localVue
    })

    it("renders component FAQItem properly", () => {
        expect(wrapper.findComponent(FAQItem).exists()).toBe(true)
    })
})
