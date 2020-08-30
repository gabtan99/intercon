import { mount, createLocalVue, config } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import Footer from '@/components/Footer'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
config.showDeprecationWarnings = false

describe('Footer Component', () => {

    let handleChange = jest.fn()
    let showResult = jest.fn()
    let handleSubmit = jest.fn()
    const wrapper = mount(Footer, {
        methods: {
        handleChange,
        showResult,
        handleSubmit
        },
        localVue
    })

    it('calls handleChange method on input by the user', () => {
        expect(handleChange).not.toHaveBeenCalled()
        wrapper.find('input').trigger('input')
        expect(handleChange).toHaveBeenCalled()
    })

    it('calls handleSubmit method on submit by the user for the newsletter', async () => {
        expect(handleSubmit).not.toHaveBeenCalled()
        expect(showResult).not.toHaveBeenCalled()
        await wrapper.find("form").trigger("submit.prevent")
        expect(handleSubmit).toHaveBeenCalled()
        expect(showResult).not.toHaveBeenCalled() //not expecting this to be called because field is empty
    })

})
