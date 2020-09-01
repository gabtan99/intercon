import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import TestimonyCard from '@/components/TestimonyCard'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Testimony Card Component', () => {

    const wrapper = mount(TestimonyCard, {
        propsData: {
            name: "Anne Pecho Corpuz",
            message: "In our toxic world its good to rejuvenate and cleans your body in so many ways ... Someone you can entrust your health for health is wealth... do it now",
            image: "https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png"
        },
        localVue
    })

    it("passes props (name, message, image) properly", () => {
        expect(wrapper.props().name).toBe('Anne Pecho Corpuz');
        expect(wrapper.props().message).toBe('In our toxic world its good to rejuvenate and cleans your body in so many ways ... Someone you can entrust your health for health is wealth... do it now');
        expect(wrapper.props().image).toBe('https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png');
    })
})
