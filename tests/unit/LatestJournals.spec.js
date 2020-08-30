import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import LatestJournals from '@/components/LatestJournals'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Journal Content Component', () => {

    const wrapper = mount(LatestJournals, {
        propsData: {
            journals: [
                {   node: {id: 1},
                    title: "Journal 1 Title",
                    content: "Journal 1 Content"},
                {   node: {id: 2},
                    title: "Journal 2 Title",
                    content: "Journal 2 Content"},
                {   node: {id: 3},
                    title: "Journal 3 Title",
                    content: "Journal 3 Content"},
            ]   
        },
        localVue
    })

    it("passes correct props (title and content) for each journal in a list", () => {
        expect(wrapper.props().journals[0].title).toBe('Journal 1 Title')
        expect(wrapper.props().journals[0].content).toBe('Journal 1 Content')
        expect(wrapper.props().journals[1].title).toBe('Journal 2 Title')
        expect(wrapper.props().journals[1].content).toBe('Journal 2 Content')
        expect(wrapper.props().journals[2].title).toBe('Journal 3 Title')
        expect(wrapper.props().journals[2].content).toBe('Journal 3 Content')
    })
})
