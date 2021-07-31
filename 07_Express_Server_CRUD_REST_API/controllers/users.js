import { v4 as uuidv4 } from 'uuid'

let users = [
    {
        id: uuidv4(),
        firstName: 'John',
        lastName: 'Smith',
        age: 30,
    },
    {
        id: uuidv4(),
        firstName: 'Mike',
        lastName: 'Doe',
        age: 25,
    },
]

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body

    const userWithId = { id: uuidv4(), ...user }

    users.push(userWithId)

    res.send(`User with the name ${user.firstName} added to the data.`)
}

export const getUser = (req, res) => {
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    users = users.filter((user) => user.id !== id)

    res.send(`User with the id ${id} deleted from the data.`)
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body

    const user = users.find((user) => user.id === id)

    if (firstName) {
        user.firstName = firstName
    }

    if (lastName) {
        user.lastName = lastName
    }

    if (age) {
        user.age = age
    }

    res.send(`User with the id ${id} has been updated.`)
}
