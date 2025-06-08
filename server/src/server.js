const http = require('http');
const mongoose = require('mongoose');

const app = require('./app.js');

const { loadPlanetsData } = require('./models/planets.model.js');

const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb+srv://builtbyblythe:jNQuxjE3AEPuelt4@cluster0.npfwuxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();


    server.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();




