import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import TargetSectionCard from '@/components/TargetSectionCard'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Target Section Card Component', () => {

    const wrapper = mount(TargetSectionCard, {
        propsData: {
            target: {
                target_name: "Age-Proof Regeneration",
                target_description: "Age-proof regeneration helps restore your youthful looks",
                background_color: "#C0E1E8",
                target_icon: '',
            },
        },
        localVue
    })

    it("passes props of target properly", () => {
        expect(wrapper.props().target.target_name).toBe('Age-Proof Regeneration');
        expect(wrapper.props().target.target_description).toBe('Age-proof regeneration helps restore your youthful looks');
        expect(wrapper.props().target.background_color).toBe('#C0E1E8');
        expect(wrapper.props().target.target_icon).toBe('');
    })
})