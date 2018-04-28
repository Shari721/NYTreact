// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var APIKey = "097be422255e45a18b6864a8176f4a6c";

// Helper Functions
var helpers = {

  runQuery: function(term, start, end){
    var term = term.trim();
    // API format YYYYMMDD --> we allow user to enter YYYY but we preset 01/01 as MMDD 
    var start = start.trim() + "0101";
    // API format YYYYMMDD --> we allow user to enter YYYY but we preset 12/31 as MMDD 
    var end = end.trim() + "1231";

    console.log("Query Run");

    // checkout: https://www.npmjs.com/package/axios
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': APIKey,
        'q': term,
        'begin_date': start,
        'end_date': end
      }
    })
    .then(function(results){
        console.log("this is runQuery results")
        console.log(results)

        var newResults = [];
        // we do results.data because axios returns a obj as results and "data" is a key on the obj that houses all the necessary info
        var fullResults = results.data.response.docs;
        var counter = 0;

        //Gets first 5 articles that have all 3 components
        for(var i = 0; i < fullResults.length; i++){

          if(counter > 4) {
            return newResults;
          }

          if(fullResults[counter].headline.main && fullResults[counter].pub_date && fullResults[counter].web_url) {
            newResults.push(fullResults[counter]);
            counter++;
          }
        }

        return newResults;
    })
  },

  // This function posts saved articles to our database.
  postArticle: function(title, date, url) {

    axios.post('/api/saved', {title: title, date: date, url: url})
    .then(function(results){

      console.log("Posted to MongoDB");
      return(results);
    })
  },

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;