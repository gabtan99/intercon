import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import ServicesServiceCard from '@/components/ServicesServiceCard'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Services Service Card Component', () => {

    let goToService = jest.fn()
    const wrapper = mount(ServicesServiceCard, {
        propsData: {
            service: {node: 
                {
                    title: "Colon Hydroscopy",
                    preview_description: "Colon Hydroscopy involves breathing pure oxygen",
                    header_image: "../../uploads/colon-hydrotherapy.png",
                    introduction: "Introduction of Colon Hydroscopy",
                    history: "History of Colon Hydroscopy",
                    benefits: {
                        introduction: "Benefits Intro of Colon Hydroscopy",
                        benefits: ["Gangrene", "Deafness", "Burn", "Bubbles of air"]
                    },
                    conditions: {
                        introduction: "Conditions Intro of Colon Hydroscopy",
                        conditions: ["Carbon Monoxide", "Crushing Injury", "Radiation Injury", "AIDS"]
                    },
                    stats: {
                        intro: "Intro Stats of Colon Hydroscopy",
                        stats_list: {
                            with_supporting_image: true,
                            figure: "../../uploads/stats.png",
                            caption: "Here are some stats.",
                            content: "In 9 out of 10 scenarios, people don't live up to others' expectations."
                        },
                        summary: "To benefit from hyperbaric oxygen therapy, you'll likely need more than one session."
                    },
                    external_reads: [
                        {   title: "RED LIGHT THERAPY",
                            link: "https://infraredsauna.com/red-light-and-near-infrared-therapy/"},
                        {   title: "Healtline - Red Light Therapy Benefits",
                            link: "https://www.healthline.com/health/red-light-therapy"}
                    ],
                    preview_conditions: ["Inflammed Skin", "Skin Eczema"],
                    preview_benefits: ["Improves blood rush", "Makes lips pinker", "Detoxified blood"],
                    introduction_image: "../../uploads/sauna.png",
                    header_color: "#000000"
                },
            }
        },
        methods: {
            goToService,
        },
        localVue
    })

    it("passes all props of Service properly", () => {
        expect(wrapper.props().service.node.title).toBe('Colon Hydroscopy');
        expect(wrapper.props().service.node.preview_description).toBe('Colon Hydroscopy involves breathing pure oxygen');
        expect(wrapper.props().service.node.header_image).toBe('../../uploads/colon-hydrotherapy.png');
        expect(wrapper.props().service.node.introduction).toBe('Introduction of Colon Hydroscopy');
        expect(wrapper.props().service.node.history).toBe('History of Colon Hydroscopy');
        expect(wrapper.props().service.node.benefits.introduction).toBe('Benefits Intro of Colon Hydroscopy');
        expect(wrapper.props().service.node.benefits.benefits[0]).toBe('Gangrene');
        expect(wrapper.props().service.node.benefits.benefits[1]).toBe('Deafness');
        expect(wrapper.props().service.node.benefits.benefits[2]).toBe('Burn');
        expect(wrapper.props().service.node.benefits.benefits[3]).toBe('Bubbles of air');
        expect(wrapper.props().service.node.conditions.introduction).toBe('Conditions Intro of Colon Hydroscopy');
        expect(wrapper.props().service.node.conditions.conditions[0]).toBe('Carbon Monoxide');
        expect(wrapper.props().service.node.conditions.conditions[1]).toBe('Crushing Injury');
        expect(wrapper.props().service.node.conditions.conditions[2]).toBe('Radiation Injury');
        expect(wrapper.props().service.node.conditions.conditions[3]).toBe('AIDS');
        expect(wrapper.props().service.node.stats.intro).toBe('Intro Stats of Colon Hydroscopy');
        expect(wrapper.props().service.node.stats.stats_list.with_supporting_image).toBe(true);
        expect(wrapper.props().service.node.stats.stats_list.figure).toBe("../../uploads/stats.png");
        expect(wrapper.props().service.node.stats.stats_list.caption).toBe("Here are some stats.");
        expect(wrapper.props().service.node.stats.stats_list.content).toBe("In 9 out of 10 scenarios, people don't live up to others' expectations.");
        expect(wrapper.props().service.node.stats.summary).toBe("To benefit from hyperbaric oxygen therapy, you'll likely need more than one session.");
        expect(wrapper.props().service.node.external_reads[0].title).toBe('RED LIGHT THERAPY');
        expect(wrapper.props().service.node.external_reads[0].link).toBe('https://infraredsauna.com/red-light-and-near-infrared-therapy/');
        expect(wrapper.props().service.node.external_reads[1].title).toBe('Healtline - Red Light Therapy Benefits');
        expect(wrapper.props().service.node.external_reads[1].link).toBe('https://www.healthline.com/health/red-light-therapy');
        expect(wrapper.props().service.node.preview_conditions[0]).toBe('Inflammed Skin');
        expect(wrapper.props().service.node.preview_conditions[1]).toBe('Skin Eczema');
        expect(wrapper.props().service.node.preview_benefits[0]).toBe('Improves blood rush');
        expect(wrapper.props().service.node.preview_benefits[1]).toBe('Makes lips pinker');
        expect(wrapper.props().service.node.preview_benefits[2]).toBe('Detoxified blood');
        expect(wrapper.props().service.node.introduction_image).toBe('../../uploads/sauna.png');
        expect(wrapper.props().service.node.header_color).toBe("#000000");
    })

    it('calls goToService method when Service Card is clicked', () => {
        expect(goToService).not.toHaveBeenCalled()
        wrapper.find('.service-card-block').trigger('click')
        expect(goToService).toHaveBeenCalled()
    })
})