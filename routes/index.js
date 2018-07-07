const constructorMethod = app => {

  app.get('/', (req, res) => {
    console.log('GET /' );
    res.render('index', { title: 'Tight Knit Games'});
  });

  // TODO
  app.get('/games', (req, res) => {
    console.log('GET /games' );
    res.sendStatus(404);
  });

  app.get('/games/go-up', (req, res) => {
    console.log('GET /games/go-up');
    console.log('dummy route as an example for dev purposes');
  });

  // TODO: Hook this up to db
  app.get('/games/:name', (req, res) => {
    let gameName = req.params['name'];
    console.log('GET /games/' + gameName);
    res.render('game', {title: gameName + ' - Tight Knit Games',
                        name: gameName})
  });

};

module.exports = constructorMethod;