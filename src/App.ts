import "dotenv/config";
import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID_GITHUB}`);
});

app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);
});


app.use(function(request, response,next){
    response.status(404).end("404: Invalid Route")
});


app.listen(4000, () => console.log("API Rodando na porta 4000"));

