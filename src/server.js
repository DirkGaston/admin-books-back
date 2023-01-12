const { app: server } = require('./app');

const port = process.env.PORT;

server.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server is running on port ${port}`);
});
