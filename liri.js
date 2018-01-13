require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

// console.log(keys);

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userinput = process.argv[2];
var songormovie = process.argv[3];

// switch(userinput){
//     case'my-tweets':
//     console.log("");
//     break;
//     case`spotify-this-song`:
//     console.log("");
//     break;
//     case`movie-this`:
//     console.log("");
//     break;
//     case`do-what-it-says`:
//     console.log("");
//     default:
//     console.log("");
// }

//twitter code ************************

var params = {screen_name: 'coder407'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error && (userinput==='my-tweets')) {
        for (var i = 0;i<tweets.length;i++)
      console.log(tweets[i].text +"  "+tweets[i].created_at);
    }
  });

  //******************************/



  //spotify code *******************************

  spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    if (userinput ===`spotify-this-song`){
        query = songormovie;
        console.log(data);
    }
     });

  //**************************************/


  //omdb**********************************
//   if (userinput==='movie-this'){
//   var queryUrl = "http://www.omdbapi.com/?t=" + songormovie + "&y=&plot=short&apikey=trilogy";

//   request(queryUrl, function(error, response, body) {
//     console.log("Release Year: " + JSON.parse(body).Year)
//   }


  //************************************** */

  //at this poing only twitter works...