import express, { response } from "express"

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW POST");
});

app.listen(3000, () => console.log("Sever is running"))