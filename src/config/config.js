export default {
    api: {
        url: process.env.REACT_APP_API_ENDPOINT,
    },
    colors: {
        primary: '#3C9FE3',
        error: '#FADBD8',
        success: '#E8F8F5'
    },
    googleAuth: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
    }
}