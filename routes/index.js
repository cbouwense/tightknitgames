const constructorMethod = app => {

  app.get('/', (req, res) => {
    res.render('index', { title: 'Tight Knit Games'});
  });

};

module.exports = constructorMethod;