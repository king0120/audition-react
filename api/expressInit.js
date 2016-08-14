var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var twitterPull = require('./app/twitterPull');


//config to use bodyParser
//get data from Post

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3030;

//API Routes
var router = express.Router();

//Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/AUDITION');

var Audition = require('./app/models/audition');

router.use((req, res, next) => {
    console.log('Something is happening');
    next();
});

router.get('/', (req, res) => {
    twitterPull();
    res.json({message: 'hello world!'});
});

router.route('/audition')
      .get((req, res) => {
          Audition.find((err, auditions) => {
              if (err){res.send(err);}
              res.json(auditions);
          });
      })

      .post((req, res) => {
          var audition = new Audition();
          audition.title = req.body.title;
          audition.theater = req.body.theater;
          audition.date = req.body.date;
          audition.description = req.body.description;

          //Save audition
          audition.save((err) => {
              if (err){res.send(err);}
              res.json({message: 'Audition Save!'});
          });
      });

router.route('/audition/:audition_id')
      .get((res, req) => {
          Audition.findById(req.params.audition_id, (err, audition) => {
              if (err){res.send(err);}
              res.json(audition);
          });
      });


//Register Routes
app.use('/api', router);

app.listen(port);
console.log('Beautiful api on port ', port);