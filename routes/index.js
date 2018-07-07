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
    let gameName = 'Go Up';
    res.render('game', {title: gameName + ' - Tight Knit Games',
                        name: gameName,
                        blurb: 'Lay eggs and bounce on them to go up.',
                        genre: '2D Action Platformer',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        image1URL: '../public/images/go-up/red.png',
                        image2URL: '../public/images/go-up/green.png',
                        image3URL: '../public/images/go-up/blue.png',
                    });

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