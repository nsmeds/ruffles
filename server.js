// not using this file at the moment

const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server running on', server.address());
});