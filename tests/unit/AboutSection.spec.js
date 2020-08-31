import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import AboutSection from '@/components/AboutSection'
const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('About Section Component', () => {

    const wrapper = mount(AboutSection, {
        propsData: {
            aboutConfig: {
                about_section_title: "About Section Title",
                about_section_description: "About Section Description",
                about_bullet_1_title: "About Bullet 1 Title",
                about_bullet_1_description: "About Bullet 1 Description",
                about_bullet_2_title: "About Bullet 2 Title",
                about_bullet_2_description: "About Bullet 2 Description",
            }
        },
        localVue
    })

    it("passes props (about section title and description, about bullet 1 info, and about bullet 2 info)", () => {
        expect(wrapper.props().aboutConfig.about_section_title).toBe('About Section Title');
        expect(wrapper.props().aboutConfig.about_section_description).toBe('About Section Description');
        expect(wrapper.props().aboutConfig.about_bullet_1_title).toBe('About Bullet 1 Title');
        expect(wrapper.props().aboutConfig.about_bullet_1_description).toBe('About Bullet 1 Description');
        expect(wrapper.props().aboutConfig.about_bullet_2_title).toBe('About Bullet 2 Title');
        expect(wrapper.props().aboutConfig.about_bullet_2_description).toBe('About Bullet 2 Description');
    })
})
