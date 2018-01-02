import express from "express";

function createApp(database, app=express()){

    app.post("/", (req, res) => {
        res.send("Req received");
    });
    return app;
}

export default createApp;
