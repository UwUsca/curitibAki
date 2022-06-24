const http = require('http')
const socketio = require('socket.io')

const globals = require('./globals')

const express = require('./express')

function initExpress(options) {
    return express(options)
}

function initHttpServer(app) {
    return http.Server(app)
}

function initSocketIO(httpServer) {
    return socketio(httpServer)
}

module.exports = (options) => {
    const defaultOptions = {
        port: globals.SERVER_PORT,
        express: null,
    }

    options = { ...defaultOptions, ...options }

    const app = initExpress(options.express)
    const httpServer = initHttpServer(app)
    const io = initSocketIO(httpServer)

    httpServer.listen(options.port, () => {
        console.log('Server listening at port %s', httpServer.address().port)
    })
}