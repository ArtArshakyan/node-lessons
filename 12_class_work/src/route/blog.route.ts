import express from 'express'
import { postService } from '../controllers/blog.controller'

const blogRouter = express.Router()

blogRouter.get('/', postService.getPosts)

blogRouter.post('/', postService.createPost)

blogRouter.get('/:id', postService.getPost)

blogRouter.delete('/:id', postService.deletePost)

blogRouter.patch('/:id', postService.updatePost)

export default blogRouter
