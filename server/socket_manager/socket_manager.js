module.exports = (socket) => {
  try {
    console.log("redis connected");
    socket.on("code", (data, Callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (e) {
    console.log(e.message);
  }
};
