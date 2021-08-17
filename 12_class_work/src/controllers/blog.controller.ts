import { Request, Response, NextFunction } from 'express'
import { serviceBlog } from '../services/blog.service'

let blogPosts: any[] = []

class BlogController {
    getPosts = async (req: Request, res: Response, next: NextFunction) => {
        try {

            res.send(await serviceBlog.getAllPosts(blogPosts))
            
        } catch (err) {
            next(err)
        }
    }

    createPost = async (req: Request, res: Response, next: NextFunction) => {
        try {

            await serviceBlog.createPost(blogPosts, req)

            res.send(`Post added to the data.`)

        } catch (err) {
            next(err)
        }
    }

    getPost = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { id } = req.params

            res.send(await serviceBlog.getPost(blogPosts, id))

        } catch (err) {
            next(err)
        }
    }

    deletePost = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { id } = req.params
            blogPosts = await serviceBlog.deletePost(blogPosts, id)

            res.send(`User with the id ${id} deleted from the data.`)

        } catch (err) {
            next(err)
        }
    }

    updatePost = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { id } = req.params
            const { title, text, img } = req.body
            await serviceBlog.updatePost(blogPosts, id, title, text, img)

            res.send(`Post with the id ${id} has been updated.`)

        } catch (err) {
            next(err)
        }
    }
}

export const postService = new BlogController()
