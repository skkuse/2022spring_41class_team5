const WebSocket = require("ws").Server
// Redis
// const { createClient } = require('redis')
// const { createAdapter } = require('@socket.io/redis-adapter')

// const pubServer = createClient({
//     socket: {
//         host: "localhost",
//         port: 6379
//     }
// })
// const subServer = pubServer.duplicate()

// const clients = {
//     publisher: pubServer,
//     subscriber: subServer
// }

const conns = new Map()

const CHANNELS = [
    'ws-server-1',
    'ws-server-2',
];

// code text
var string = ""

module.exports = async (server) => {
    // await Promise.all([
    //     pubServer.connect(),
    //     subServer.connect()
    // ])

    const ws = new WebSocket({server: server})

    // socket은 기본적으로 event 방식으로 작동
    ws.on('connection', (socket) => {
        console.log("User In")

        socket.on('disconnect', () => {
            console.log('User Out')
        })
    
        // chat-msg라는 이벤트가 msg라는 object 형태로 들어오면 
        // 서버에서 emit() 함수를 통하여 'chat-msg'라는 이벤트로 동일한 내용을 
        // 전체 사용자에게 뿌려줍니다. 
        socket.on('code', (message) => {
            console.log(message)
        })

        socket.onmessage = (event) => {
            console.log(event.data)
            const data = JSON.parse(event.data)
            string = data.code
        }

        socket.interval = setInterval(() => {
            if (socket.readyState == socket.OPEN) {
                socket.send(
                    JSON.stringify({
                        code: string
                    })
                )
            }
        }, 3000)
    })
}