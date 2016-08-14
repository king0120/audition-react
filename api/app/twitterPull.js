var env = require('dotenv').config();
var twit = require('twit');



var T = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var pullTwitterData = () => {
  console.log('pulling data');
  T.get('search/tweets', {'q':'audition','geocode': '33.357416,-84.15664,200mi','lang': 'en'},(err, data, response) => {
      console.log(data);
      // console.log(data.text);
  });

};

module.exports = pullTwitterData;