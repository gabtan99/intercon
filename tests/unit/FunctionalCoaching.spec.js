import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import FunctionalCoaching from '@/components/FunctionalCoaching'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Functional Coaching Component', () => {

    let goToService = jest.fn()
    const wrapper = mount(FunctionalCoaching, {
        propsData: {
            coaching: {
                title: "Functional Health and Wellness Coaching",
                short_description: "Functions of Health and Coaching with Wellness",
                facebook_page_url: "Sage",
                email: "My power does not end. Ask for aid and you shall receive it. Stand tall. We are VALORANT, we are fighters!",
                thumbnail_image: "https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png"
            },
        },
        methods: {
            goToService,
        },
        localVue
    })

    it("passes all props of FunctionalCoaching component properly", () => {
        expect(wrapper.props().coaching.title).toBe('Functional Health and Wellness Coaching');
        expect(wrapper.props().coaching.short_description).toBe('Functions of Health and Coaching with Wellness');
        expect(wrapper.props().coaching.facebook_page_url).toBe('Sage');
        expect(wrapper.props().coaching.email).toBe('My power does not end. Ask for aid and you shall receive it. Stand tall. We are VALORANT, we are fighters!');
        expect(wrapper.props().coaching.thumbnail_image).toBe('https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png');
    })

    it('calls goToService method when entire block is clicked', () => {
        expect(goToService).not.toHaveBeenCalled()
        wrapper.find('.service-card-block').trigger('click')
        expect(goToService).toHaveBeenCalled()
    })
})
