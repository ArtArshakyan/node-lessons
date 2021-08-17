import { v4 as uuidv4 } from 'uuid'

class BlogService {
    getAllPosts = (allPosts: any) => {
        return allPosts
    }

    createPost = (allPosts: any[], req: { body: any }) => {
        const blogPost = req.body

        return allPosts.push({ id: uuidv4(), ...blogPost })
    }

    getPost = (blogPosts: any[], _id: any) => {
        const foundPost = blogPosts.find((post) => post.id === _id)
        return foundPost
    }

    deletePost = (blogPosts: any[], _id: any) => {
        blogPosts = blogPosts.filter((post) => post.id !== _id)
        return blogPosts
    }

    updatePost = (blogPosts: any[], _id: any, title: String, text: String, img: String ) => {
        const blogPost = blogPosts.find((post) => post.id === _id)

        if (title) blogPost.title = title
        if (text) blogPost.text = text
        if (img) blogPost.img = img

        return blogPost
    }
}

export const serviceBlog = new BlogService()
