import { getRepository } from 'typeorm'
import { User } from '../entity/User'

class UserService {
    async register(firstName: string, lastName: string, email: string) {
        const userRepo = getRepository(User)
        const user = new User()
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        return userRepo.save(user)
    }
}

export const userService = new UserService()
