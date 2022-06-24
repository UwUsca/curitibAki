export const PRODUCTION = true
export const BASEPATH = (PRODUCTION) ? '' : ''

export const SERVER_PORT = location.port
export const SERVER_ADDRESS = (PRODUCTION) ? 'https://curitibaki.herokuapp.com' : `http://localhost:27300`
export const API_ENDPOINT = `${SERVER_ADDRESS}/api/v1`

