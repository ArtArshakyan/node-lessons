import { getApp, PORT } from './app'

const server = (): void => {
    const app = getApp()

    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`)
    })
}

export default server()
