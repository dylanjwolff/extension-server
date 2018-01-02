import createApp from "./app";
import MongoClient from "mongodb";

MongoClient.connect("localhost:27017", (err, database) => {
    if (err) return console.log(err);

    const app = createApp(database);
    app.listen(8000, () => {
        console.log("Example app listening on port 8000!");
    });
});
