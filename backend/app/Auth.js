const bcrypt = require('bcrypt')

const Usuario = require('./model/Usuario')

function authenticate(jwt, email, senha) {
  return new Promise(async (resolve, reject) => {
    if (email && typeof email === 'string') email = email.toLowerCase()

    if (email && senha) {
      let usuario = await Usuario.findOne({ where: { email: email } })

      if (usuario) {
        const idUsuario = usuario.id_usuario

        bcrypt.compare(senha, usuario.senha, async (err, matches) => {
          if (matches) {
            const payload = {
              id_usuario: idUsuario,
              nome: usuario.nome,
              email: usuario.email
            }

            const token = await jwt.generateToken(null, idUsuario, payload)
                .catch((err) => {
                  console.error(err)
                  reject(new Error('Error while generating token.'))
                })

            resolve(token)

            return token
          } else {
            reject(new Error('Invalid credentials.'))
          }
        })
      } else {
        reject(new Error('Invalid credentials.'))
      }
    } else {
      reject(new Error('Missing credentials.'))
    }
  })
}

function validate(jwt, token) {
  return new Promise(async (resolve, reject) => {
    if (token) {
      const tokenIsValid = await jwt.verifyToken(token)
          .catch((err) => {
            reject(new Error('Invalid token.'))
          })

      if (tokenIsValid) resolve(token)
    } else {
      reject(new Error('Token not provided.'))
    }
  })
}

function renew(jwt, token) {
  return new Promise(async (resolve, reject) => {
    if (token) {
      const decodedToken = await jwt.verifyToken(token)
          .catch((err) => {
            reject(new Error('Invalid token.'))
          })

      if (decodedToken) {
        const payload = {
          id_usuario: decodedToken.id_usuario,
          nome: decodedToken.nome,
          email: decodedToken.email
        }

        const token = await jwt.generateToken(null, decodedToken.id_usuario, payload)
            .catch((err) => {
              reject(new Error('Error while renewing the token.'))
            })

        resolve(token)
      } else {
        reject(new Error('Error while renewing the token.'))
      }
    } else {
      reject(new Error('Token not provided.'))
    }
    
  })
}

module.exports = {
  authenticate, validate, renew
}