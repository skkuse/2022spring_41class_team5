const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const http = require('http')

// Redis
const { createClient } = require('redis')
const { createAdapter } = require('@socket.io/redis-adapter')

const pubServer = createClient({url: "redis://localhost:6379"})
const subServer = pubServer.duplicate()

// 기본적인 환경 세팅
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const code = require("./api/code")
app.use('/api/code', code)

const server = http.createServer(app)
const port = process.env.PORT || 5000

// Socket.io를 app.io에 세팅
app.io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true,
    }
})

// redis-socket.io 연결
// 다중 인스턴스간 데이터 공유
app.io.adapter(createAdapter(pubServer, subServer))

// socket은 기본적으로 event 방식으로 작동
app.io.on('connection', (socket) => {
    console.log('User In')

    socket.on('disconnect', () => {
        console.log('User Out')
    })

    // chat-msg라는 이벤트가 msg라는 object 형태로 들어오면 
    // 서버에서 emit() 함수를 통하여 'chat-msg'라는 이벤트로 동일한 내용을 
    // 전체 사용자에게 뿌려줍니다. 
    socket.on('chat-msg', (msg) => {
        app.io.emit('chat-msg', msg)
    })
})

// app.io와 server를 연결
app.io.attach(server)
server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})