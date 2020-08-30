import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import JournalContent from '@/components/JournalContent'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Journal Content Component', () => {

    const wrapper = mount(JournalContent, {
        propsData: {
            title: "Journal Content Title goes here",
            content: "Journal Content actual Content goes here",
        },
        localVue
    })

    it("passes props: title and content properly", () => {
        expect(wrapper.props().title).toBe('Journal Content Title goes here');
        expect(wrapper.props().content).toBe('Journal Content actual Content goes here');
    })
})
