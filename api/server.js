const express = require('express')
const server = express()

//Middleware
const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())

//Routers
const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')

//Endpoints
server.use('/api', authRouter)
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running!' })
})

module.exports = server