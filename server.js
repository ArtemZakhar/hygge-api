const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Assuming db.json is in the same directory
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3010;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
