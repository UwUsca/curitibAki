const core = require('../core')
const globals = require('./globals')
const setup = require('./setup')

const WebRouter = require('./router/WebRouter')
const ApiRouter = require('./router/ApiRouter')

const JWT = require('../core/auth/jwt')
const JWTUnauthorizedMiddleware = require('../core/middleware/JWTUnauthorizedMiddleware')

const jwt = new JWT({
    privateKey: globals.PRIVATE_KEY,
    publicKey: globals.PUBLIC_KEY,
    audience: 'curitibaki',
    issuer: 'curitibaki'
})

jwt.loadKeys()
  .then(() => {
      const JWTMiddleware = jwt.getMiddleware(undefined, {
          path: [
              '/',
              /pontos-turisticos/,
              /emergencia/,
              /faq/,
              /login/,
              /api\/v1\/locais/,
              '/api/v1/token',
          ]
      })

      core({
          port: globals.SERVER_PORT,

          express: {
              corsWhitelist: [
                  'http://localhost:4000',
                  'https://curitibaki.herokuapp.com',
              ],

              middlewares: [
                  JWTMiddleware,
                  JWTUnauthorizedMiddleware
              ],

              routers: [
                  { baseRoute: '/api', router: ApiRouter, arguments: [jwt] },
                  { baseRoute: '/', router: WebRouter },
              ]
          }
      })

      setup()
  })
  .catch(console.error)
