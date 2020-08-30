import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import FunctionalCoaching from '@/components/FunctionalCoaching'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Functional Coaching Component', () => {

    let goToService = jest.fn()
    const wrapper = mount(FunctionalCoaching, {
        propsData: {
            service: {},
        },
        methods: {
            goToService,
        },
        localVue
    })

    it('calls goToService method when entire block is clicked', () => {
        expect(goToService).not.toHaveBeenCalled()
        wrapper.find('.service-card-block').trigger('click')
        expect(goToService).toHaveBeenCalled()
    })
})
