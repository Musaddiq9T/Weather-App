let city = 'Manchester'

function fetchWeather(city) {
   const apiKey = '2b767bae393ae7e90bc4843aff5ee515';
   const weatherInfoElement = document.getElementById('weather-info');

// Elements for city input, button and weather info
const cityInput = document.getElementById('city-input');
const updateButton = document.getElementById('update-button');



// Function to fetch weather data and update HTML
   // make the API request
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
   .then(response => response.json())
   .then(data => {
      const temperature = (data.main.temp - 273.150).toFixed(2);
      const description = data.weather[0].description;

      const weatherHtml = `<p> Temperature: ${temperature}°C</p>
                           <p> Description: ${description}</p>`;
      
      weatherInfoElement.innerHTML = weatherHtml;
      })
   
      .catch(error => {
         console.error('Error fetching weather data:', error);
         weatherInfoElement.innerHTML = '<p>Error fetching weather data</p>';
      });
}

document.addEventListener('DOMContentLoaded', function() {
   fetchWeather(city);
   });

   let locbutton = document.getElementById("locbutton");

   locbutton.addEventListener('click', () => {
      const location = prompt ('which city?');
      if (location) {
         city = location;
         fetchWeather(city);
      }
   })

   

