const port = process.env.PORT || 4000;

const io = require("socket.io")(port, {
  cors: {
    origin: "*",
  },
});

let signalValue = false;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("update-signal-value", () => {
    signalValue = !signalValue;
    console.log("signal value updated");
    socket.broadcast.emit("get-signal-value", signalValue);
    socket.emit("get-signal-value", signalValue);
  });
});
