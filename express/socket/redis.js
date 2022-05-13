const session = require("express-session")

let RedisStore = require("connect-redis")(session)
const { createClient } = require('redis')
let redisClient = createClient({legacyMode: true})

redisClient.connect().then(() => {
    console.log("redis connect")
}).catch(console.error)

module.exports = {
    session, RedisStore, redisClient
}