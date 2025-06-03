const http = require('http');

const app = reuqire('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listening(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
})





