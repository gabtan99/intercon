import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import FAQItem from "@/components/FAQItem";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('FAQ Item Component', () => {

    const wrapper = mount(FAQItem, {
        propsData: {
            question: "Can I take multiple therapies?",
            answer: "Yes ofcourse you can!"
        },
        localVue
    })

    it("passes props: question and answer", () => {
        expect(wrapper.props().question).toBe('Can I take multiple therapies?');
        expect(wrapper.props().answer).toBe('Yes ofcourse you can!');
    })

    it("renders component FAQItem properly", () => {
        expect(wrapper.findComponent(FAQItem).exists()).toBe(true)
    })
})
