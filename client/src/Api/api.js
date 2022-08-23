const axios = require('axios')

const url ='http://localhost:5000/posts';

export const fetchPosts=()=>axios.get(url).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {

    console.log(error);
  })