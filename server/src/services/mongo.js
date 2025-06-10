const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://builtbyblythe:jNQuxjE3AEPuelt4@cluster0.npfwuxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
};

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect

}