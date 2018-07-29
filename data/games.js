const mongoCollections = require("../config/mongoCollections");
const games = mongoCollections.games;
const uuidv4 = require("uuid/v4");

let exportedMethods = {

    getAllGames() {
        try {
            return games().then(gamesCollection => {
                return gamesCollection.find({}).toArray();
            });
        }
        catch (e) {
            console.error(e);
        }
    },

    getGameById(id) {
        try {
            return games().then(gamesCollection => {
                return gamesCollection.findOne({ _id: id }).then(game => {
                    if (!game) throw "game not found";
                    return game;
                });
            });
        }
        catch (e) {
            console.error(e);
        }
    },

    getGameByName(name) {
        try {
            return games().then(gamesCollection => {
                return gamesCollection.findOne({ url_name: name }).then(game => {
                    if (!game) throw (name + "not found");
                    return game;
                });
            });
        }
        catch (e) {
            console.error(e);
        }
    },

    addGame(game) {
        try {
            return games().then(gamesCollection => {
                return gamesCollection
                .insertOne(game)
                .then(newInsertInformation => {
                    return game;
              });
            });
        }
        catch (e) {
            console.error(e);
        }
    },

    replaceGame(id, newGame) {
        try {
            return games().then(gamesCollection => {
                return gamesCollection
                .replaceOne(
                    {"_id": id},
                    newGame
                )
                .then(newInsertInformation => {
                    return this.getGameById(id);
              });
            });
        }
        catch (e) {
            console.error(e);
        }
    },

    updateGame(id, replace) {
        return games().then(gamesCollection => {
            return users.getUserById(gameerId).then(userThatgameed => {
            let updatedGame = {
                title: title,
                body: body,
                gameer: {
                id: gameerId,
                name: userThatgameed.name
                }
            };

            return gamesCollection
                .updateOne({ _id: id }, {$set: updatedGame})
                .then(result => {
                return this.getgameById(id);
                });
            });
        });
    },

    deleteGame(id) {
        try {
            return games().then(gamesCollection => {
                return gamesCollection
                .deleteOne(
                    {"_id": id},
                );
            });
        }
        catch (e) {
            console.error(e);
        }
    },

};

module.exports = exportedMethods;