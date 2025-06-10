const http = require('http');
const { mongoConnect } = require('./services/mongo.js');

const mongoose = require('mongoose');
const app = require('./app.js');

const { loadPlanetsData } = require('./models/planets.model.js');

const PORT = process.env.PORT || 8000;


const server = http.createServer(app);


async function startServer() {
    await mongoConnect();
    await loadPlanetsData();

    server.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();




