import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import BlogCard from '@/components/BlogCard'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Blog Card Component', () => {

    let goToBlog = jest.fn()
    const wrapper = mount(BlogCard, {
        propsData: {
            blog: {
                title: "Blog Title",
                excerpt: "Blog Excerpt",
                date: "August 31, 2020",
                path: "https://intercon-git-dev.gabtan99.now.sh/blog/how-to-be-healthy-during-a-pandemic/",
                header_image: "/uploads/blog-header.jpg",
            },
        },
        methods: {
            goToBlog,
        },
        localVue
    })

    it("passes props: title, excerpt, and date properly", () => {
        expect(wrapper.props().blog.title).toBe('Blog Title');
        expect(wrapper.props().blog.excerpt).toBe('Blog Excerpt');
        expect(wrapper.props().blog.path).toBe('https://intercon-git-dev.gabtan99.now.sh/blog/how-to-be-healthy-during-a-pandemic/');
        expect(wrapper.props().blog.header_image).toBe('/uploads/blog-header.jpg');
    })

    it('calls goToBlog method when Blog Card is clicked', () => {
        expect(goToBlog).not.toHaveBeenCalled()
        wrapper.find('.blog-card').trigger('click')
        expect(goToBlog).toHaveBeenCalled()
    })
})