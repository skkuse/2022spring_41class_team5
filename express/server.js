const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const http = require('http')

// Redis
var redis = require("./socket/redis")

// 기본적인 환경 세팅
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(redis.session({
    store: new redis.RedisStore({
        client: redis.redisClient, 
        host: "localhost",
        port: 6379,
        prefix: "session",
        db: 0,
    }),
    saveUninitialized: false,
    secret: "cat",
    resave: false,
}))

const code = require("./api/code")
app.use('/api', code)

const server = http.createServer(app)
const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

const wss = require("./socket/history")
wss(server)