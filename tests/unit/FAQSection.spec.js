import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import FAQSection from '@/components/FAQSection'
import FAQItem from "@/components/FAQItem";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('FAQ Section Component', () => {

    const wrapper = mount(FAQSection, {
        propsData: {
            faqs: 
            [
                {   node: {id: 1},
                    question: "Do you have any other branches?",
                    answer: "Currently we only have one main branch"},
                {   node: {id: 2},
                    question: "Are you open during this pandemic?",
                    answer: "Yes we are, and we take precautions"},
                {   node: {id: 3},
                    question: "Is there parking available?",
                    answer: "Yes, we have 5 parking slots"},
            ]
        },
        localVue
    })

    it("renders FAQ item components properly", () => {
        expect(wrapper.props().faqs[0].question).toBe('Do you have any other branches?');
        expect(wrapper.props().faqs[0].answer).toBe('Currently we only have one main branch');
        expect(wrapper.props().faqs[1].question).toBe('Are you open during this pandemic?');
        expect(wrapper.props().faqs[1].answer).toBe('Yes we are, and we take precautions');
        expect(wrapper.props().faqs[2].question).toBe('Is there parking available?');
        expect(wrapper.props().faqs[2].answer).toBe('Yes, we have 5 parking slots');
    })
})
