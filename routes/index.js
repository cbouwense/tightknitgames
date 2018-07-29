const gamesRoutes = require("./games");

const constructorMethod = app => {
  
    app.get('/', (req, res) => {
        res.render('index', { title: 'Tight Knit Games'});
    });
    
    app.use('/games', gamesRoutes);

    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Page Not found' });
    });
};

module.exports = constructorMethod;