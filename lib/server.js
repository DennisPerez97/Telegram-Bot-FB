const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
///Feture FizzBuzz
app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const trick = ExplorerController.getFizzBuzzFeature(score);
    response.json({score:score,trick:trick});
});
///Feture for explorers
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const ExplorerByMission = ExplorerController.getExplorerByMission(mission);
    response.json(ExplorerByMission);
});
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const ExplorerByMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission:mission, quantity: ExplorerByMission});
});
app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const ExplorerByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(ExplorerByMission);
});
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});