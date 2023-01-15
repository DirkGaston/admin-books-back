const { app: server } = require('./app');

const { PORT } = process.env;

server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server is running on port ${PORT}`);
});
