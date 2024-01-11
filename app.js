const io = require('socket.io')(3001, {
  cors: {
    origin: ["http://localhost:3000"]
  }
})
let signal_value = false
io.on("connection", socket => {
  console.log("a user connected with the socket-id: ", socket.id)
  socket.on('update-signal-value', () => {
    signal_value = !signal_value
    console.log("signal updated to: ", signal_value)
    socket.broadcast.emit('get-signal-value', signal_value)
  })
})