const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const app = express();

const dbPath = path.join(__dirname, "cricketTeam.db");
let db = null;
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbObject,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("Server is running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

app.get("/players/", (request, response) => {
  const createNewPlayerId = (dbObject) => {
    return {
      playerId: dbObject.player_id,
      playerName: dbObject.player_name,
      jerseyNumber: dbObject.jersey_number,
      role: dbObject.role,
    };
  };
  const playerDetails = db.all(createNewPlayerId);
  response.send(playerDetails);
});

app.post("/players/", (request, response) => {
    const cricketTeam = request.body;
    const createPlayerId = (dbObject) => {
    return {
      playerName: dbObject.player_name,
      jerseyNumber: dbObject.jersey_number,
      role: dbObject.role,
    };
    const playerId = db.get(createPlayerId);
    response.send("Player Added to Team");
});

app.get("/players/:playerId", (request, response) => {
    const cricketPlayerId = (dbObject) =>{
        return {
            playerId: dbObject.player_id,
            playerName: dbObject.player_name,
            jerseyNumber:dbObject.jersey_number,
            role:dbObject.role,
        };
        const playersId = db.all(cricketPlayerId);
        response.send(playersId);
    }
})

app.put("players/:playerId/", (request, response) => {
    const updatePlayerId = (dbObject) =>{
        return {
            playerName:dbObject.player_name,
            jerseyNumber:db.object.jersey_number,
            role:dbObject.role,
    };
    const updateId = db.get(updatePlayerId);
    response.send(updateId);
})