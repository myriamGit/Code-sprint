    const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      const API_KEY = "92ae9a690436b29b4babd5f9e0f1fede";
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

      navigator.geolocation.getCurrentPosition(function(position) {
        faireQqc(position.coords.latitude, position.coords.longitude);
        console.log(function(position))
          });

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const meteoHTML = document.getElementById("meteo");
          meteoHTML.innerHTML = `
            <h2>${res.main.temp}</h2>
            <p class="description">${res.weather.description}</p>`
            
          ;
        });