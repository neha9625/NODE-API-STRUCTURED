import express from "express";
import Routes from "./User/Route.js";

const app = express();

app.use('/api', Routes);
app.listen(3000, () => {
    console.log("server are running on http://localhost:3000")
})

export default app;