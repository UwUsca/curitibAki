const fs = require('fs')
const path = require('path')
const express = require('express')
const multer = require('multer')

const UsuarioApi = require('../api/UsuarioApi')
const LocalApi = require('../api/LocalApi')

const Auth = require('../Auth')

const globals = require('../globals')

module.exports = (jwt) => {
  const router = express.Router()

  const parsers = [
    express.urlencoded({ extended: true }),
    express.json()
  ]

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(globals.DATA_DIR))
    },

    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  const upload = multer({ storage: storage })

  router.delete('/v1/usuarios/:id', UsuarioApi.delete)
  router.put('/v1/usuarios/:id', ...parsers, UsuarioApi.updateOneById)
  router.get('/v1/usuarios/:id', UsuarioApi.findOneById)
  router.post('/v1/usuarios', ...parsers, UsuarioApi.create)
  router.get('/v1/usuarios', UsuarioApi.findAll)

  router.delete('/v1/locais/:id', LocalApi.delete)
  router.post('/v1/locais/:id', ...parsers, upload.single('foto'), LocalApi.updateOneById)
  router.get('/v1/locais/:id', LocalApi.findOneById)
  router.post('/v1/locais', ...parsers, upload.single('foto'), LocalApi.create)
  router.get('/v1/locais', LocalApi.findAll)

  router.post('/v1/token', ...parsers, async (req, res) => {
    const data = req.body

    const token = await Auth.authenticate(jwt, data.email, data.senha)
        .catch((err) => {
          res.json({
            error: err.message
          })
        })

    if (token) res.json({ token: token })
  })

  router.post('/v1/token/validate', ...parsers, async (req, res) => {
    const data = req.body

    const token = await Auth.validate(jwt, data.token)
        .catch((err) => {
          res.json({
            error: err.message
          })
        })

    if (token) res.json({ token: token })
  })

  router.post('/v1/token/renew', express.urlencoded({ extended: true }), async (req, res) => {
    const data = req.body

    const token = await Auth.renew(jwt, data.token)
        .catch((err) => {
          res.json({
            error: err.message
          })
        })

    if (token) res.json({ token: token })
  })

  return router
}