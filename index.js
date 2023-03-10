let weather = {
    apiKey: "1f65cb54bc5e8b957d12259ff2d446dd",
    fetchWeather: function (city) {
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  weather.fetchWeather("Nairobi");

  const likeButton = document.querySelector('.like');
  const dislikeButton = document.querySelector('.dislike');
  
  likeButton.addEventListener('click',function(){
    likeButton.classList.toggle('clicked');

    if(likeButton.classList.contains('clicked')){
        dislikeButton.classList.remove('clicked')
    }
  });

  dislikeButton.addEventListener('click', function(){
    dislikeButton.classList.toggle('clicked');

    if(dislikeButton.classList.contains('clicked')){
        likeButton.classList.remove('clicked');
    }
  });

  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from reloading the page
  
    // get the comment text from the form
    var commentText = document.getElementById('comment-text').value;
  
    // create a new element to hold the comment
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
  
    // add the comment text to the element
    var commentTextElement = document.createElement('p');
    commentTextElement.classList.add('comment-text');
    commentTextElement.textContent = commentText;
    commentElement.appendChild(commentTextElement);
  
    // add the comment element to the page
    document.getElementById('comments').appendChild(commentElement);
  
    // clear the form
    document.getElementById('comment-form').reset();
  });