import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import TargetCard from '@/components/TargetCard'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Target Card Component', () => {

    let show = jest.fn()
    let close = jest.fn()
    const wrapper = mount(TargetCard, {
        propsData: {
            target: {
                target_name: "Age-Proof Regeneration",
                target_description: "Age-proof regeneration helps restore your youthful looks",
                background_color: "#C0E1E8",
                target_icon: '',
                target_services: [
                    {   service_name: "Infrared Sauna",
                        service_description: "Just a little indication."        },
                    {   service_name: "Red Light Therapy",
                        service_description: "And I know you're saying"         },
                    {   service_name: "Colon Hydroscopy",
                        service_description: "Oh Bob, you've done it this time" },
                ]
            },
        },
        methods: {
            show,
            close,
        },
        localVue
    })

    it("passes all props of target properly", () => {
        expect(wrapper.props().target.target_name).toBe('Age-Proof Regeneration');
        expect(wrapper.props().target.target_description).toBe('Age-proof regeneration helps restore your youthful looks');
        expect(wrapper.props().target.background_color).toBe('#C0E1E8');
        expect(wrapper.props().target.target_icon).toBe('');
        expect(wrapper.props().target.target_services[0].service_name).toBe('Infrared Sauna');
        expect(wrapper.props().target.target_services[0].service_description).toBe('Just a little indication.');
        expect(wrapper.props().target.target_services[1].service_name).toBe('Red Light Therapy');
        expect(wrapper.props().target.target_services[1].service_description).toBe("And I know you're saying");
        expect(wrapper.props().target.target_services[2].service_name).toBe('Colon Hydroscopy');
        expect(wrapper.props().target.target_services[2].service_description).toBe("Oh Bob, you've done it this time");
    })

    it('calls "show" method when Target Card is clicked', () => {
        expect(show).not.toHaveBeenCalled()
        wrapper.find('.card').trigger('click')
        expect(show).toHaveBeenCalled()
    })
})