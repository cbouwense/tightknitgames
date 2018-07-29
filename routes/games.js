const express = require("express");
const router = express.Router();
const data = require("../data");
const gamesData = data.games;
const uuidv4 = require("uuid/v4");

router.get('/', async (req, res) => {
    console.log('GET /games');
    try {
        const gamesList = await gamesData.getAllGames();
        res.json(gamesList);
    }
    catch (e) {
        res.status(404).json({ message: "Games not found" });
    }
});

router.get('/:name', async (req, res) => {
    console.log('GET /games/' + req.params.name);
    try {
        const game = await gamesData.getGameByName(req.params.name);
        res.json(game);
    } 
    catch (e) {
        res.status(404).json({ message: "Game not found" });
    }
});

/*
router.post('/', async (req, res) => {
    console.log('POST /games');
    try {
        const game = req.body;
        game._id = uuidv4();
        res.send(await gamesData.addGame(game));
    }
    catch (e) {
        res.status(501).json({ message: "Error processing your POST request" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const recipe = req.body;
        const id = req.params.id;
        res.send(await recipesData.replaceRecipe(id, recipe));
        return await recipesData.getRecipeById(id);
    }
    catch (e) {
        console.error(e);
        res.status(501).json({ message: "Error processing your POST request" });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const recipe = req.body;
        const id = req.params.id;
        res.send(await recipesData.replaceRecipe(id, recipe));
        return await recipesData.getRecipeById(id);
    }
    catch (e) {
        console.error(e);
        res.status(501).json({ message: "Error processing your PATCH request" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        res.send(await recipesData.deleteRecipe(id));
    }
    catch (e) {
        console.error(e);
        res.status(501).json({ message: "Error processing your DELETE" });
    }
});
*/
module.exports = router;