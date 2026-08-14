const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://asukathreads_db_user:MzZke8n3KeCXUN67@cluster0.ktxevym.mongodb.net/?appName=Cluster0')
    const db = mongoose.connection;
    db.on("connected", () => {
        console.log("Connected to MongoDB");
    });
    db.on("disconnected", () => {
        console.log("Disconnected from MongoDB");
    });
    db.on("error", (err) => {
        console.log("Error connecting to MongoDB", err);
    });

    module.exports = db;