

var apiKey = '49caef2d8efc6ee4f61dc606a6686eb2';



// SELECTORS ----------------------------------------------

const form = document.getElementById('form-api');
const contentSection = document.getElementById('content-section');

// APIKEY & SEARCH ----------------------------------------

let value = '';

// AJAX REQUEST & CONTENT CREATION -------------------------

function AJAXRequest() {
  let queryURL = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${apiKey}&language=en-US&page=1&include_adult=false&append_to_response=images&include_image_language=en,null`;
  // INITIALIZE AJAX REQUEST
  let xhr = new XMLHttpRequest();
  // OPEN AJAX REQUEST
  xhr.open('GET', queryURL, true);
  // FUNCTION TO RUN FOR REQUEST
  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let results = response.results;
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        let movieDiv = document.createElement('div');
        movieDiv.className = 'movieItems';
        var movieimage = movieDiv.innerHTML = `<img src="https://image.tmdb.org/t/p/w200/${response.results[0].poster_path}" alt="image of the user's searched movie" id="searched-mov-img"> <br>`;
        movieDiv.innerHTML += response.results[i].title + '<br>';
        movieDiv.innerHTML += response.results[i].release_date + '<br>';
        movieDiv.innerHTML += response.results[i].overview + '<br>';
        movieDiv.innerHTML += response.results[i].vote_average + '<br>';
        movieDiv.innerHTML += response.results[i].release_date + '<br>';
     


        // $("#title-text").append("<div id='title-text'>" + response.results[0].title + '</div>');
      }
      $("#movie-img").html(movieimage);
      $("#title-text").html(response.results[0].title);
      $("#release-date").html("Release Date: " + response.results[0].release_date);     
      $(".overview").html("Overview");
      $("#userScore").html("User Score: " + response.results[0].vote_average); 
      $("#overview-text").html(response.results[0].overview);
      $(".featured-crew").html("Featured Crew Members");
    }
  }
  //SEND AJAX REQUEST
  xhr.send();
}

// LISTENERS -------------------------------------------------------------
// Runs request for searched items and stores previous searches in footer

form.addEventListener('submit', (event) => {
  event.preventDefault();
  value = document.getElementById('mov-search').value;
  AJAXRequest();
});