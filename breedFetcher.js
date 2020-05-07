const request = require('request');
const breedName = process.argv[2];


const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log(response); // Print the response status code if a response was received
    if(error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
    if(data.length === 0) {
      callback("Breed Not Found!");
    } else {
      callback(null, data[0]['description']);
    }
    }
  // console.log('body:', body); // Print the HTML for the Google homepage.
});
};

module.exports = { fetchBreedDescription };
