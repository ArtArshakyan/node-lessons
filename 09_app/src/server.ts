import { getApp, PORT } from './app'

const server = () => {
    // const {
    //     NODE_ENV,
    //     NODE_CONFIG_ENV,
    //     HOSTNAME,
    //     ENV_NAME,
    //     ENV_TYPE,
    //     APP_VERSION,
    //     npm_package_version
    // } = process.env

    const app = getApp()

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

export default server()
