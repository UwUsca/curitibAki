const path = require('path')
const express = require('express')

const { PUBLIC_DIR } = require('../globals')

module.exports = () => {
    const router = express.Router()

    router.get('/*', (req, res) => {
        res.sendFile(path.resolve(PUBLIC_DIR, 'index.html'))
    })

    return router
}