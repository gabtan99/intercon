import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import TestimonyCarousel from '@/components/TestimonyCarousel'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Testimony Carousel Component', () => {

    const wrapper = mount(TestimonyCarousel, {
        propsData: {
            testimonies: {item: {node: [
                {
                    id: "1",
                    name: "Anne Pecho Corpuz",
                    message: "In our toxic world its good to rejuvenate and cleans your body in so many ways ... Someone you can entrust your health for health is wealth... do it now",
                    image: "https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png"
                },
                {
                    id: "2",
                    name: "Chris Fisher",
                    message: "Intercon Regenerative Center is just the place I have been searching",
                    image: "https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png"
                },
                {
                    id: "3",
                    name: "Rosh Ziel Elle",
                    message: "My first time visit is really awesome, the staff is good and very accommodating",
                    image: "https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png"
                },
            ]}}    
        },
        localVue
    })

    it("passes props (id, name, message, image) for each testimony properly", () => {
        expect(wrapper.props().testimonies.item.node[0].id).toBe('1');
        expect(wrapper.props().testimonies.item.node[0].name).toBe('Anne Pecho Corpuz');
        expect(wrapper.props().testimonies.item.node[0].message).toBe('In our toxic world its good to rejuvenate and cleans your body in so many ways ... Someone you can entrust your health for health is wealth... do it now');
        expect(wrapper.props().testimonies.item.node[0].image).toBe('https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png');
        expect(wrapper.props().testimonies.item.node[1].id).toBe('2');
        expect(wrapper.props().testimonies.item.node[1].name).toBe('Chris Fisher');
        expect(wrapper.props().testimonies.item.node[1].message).toBe('Intercon Regenerative Center is just the place I have been searching');
        expect(wrapper.props().testimonies.item.node[1].image).toBe('https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png');
        expect(wrapper.props().testimonies.item.node[2].id).toBe('3');
        expect(wrapper.props().testimonies.item.node[2].name).toBe('Rosh Ziel Elle');
        expect(wrapper.props().testimonies.item.node[2].message).toBe('My first time visit is really awesome, the staff is good and very accommodating');
        expect(wrapper.props().testimonies.item.node[2].image).toBe('https://res.cloudinary.com/dgq7s4lkp/image/upload/v1598761543/uploads_dev/placeholder_fww9hi.png');
    })
})
