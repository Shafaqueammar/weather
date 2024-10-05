

var favoriteWeather = prompt("What is your favorite weather? (sunny, rainy, cloudy, stormy)");


// Check the user's input

if (favoriteWeather.toLowerCase() === 'sunny') {
    document.write(`
                <div class="container-sunny">
            <div class="weather-card-sunny">
            <h2>Sunny Weather</h2>
            <p>It's a bright and sunny day! Perfect for a picnic or outdoor activities.</p>
            <img src="./Asset/Images/sunny.gif" alt="Sunny" class="weather-image">
            </div>
            </div>  
            `)


} else if (favoriteWeather.toLowerCase() === 'rainy') {
    document.write(`
        
             <div class="rainy_sec">
             <div class="container-rainy">
            <div class="weather-card-rainy">
            <h2>Rainy Weather</h2>
            <p>It's a bright and rainy day! Perfect for a picnic or outdoor activities.</p>
            <img src="./Asset/Images/rany.gif" alt="Rainy" class="weather-image">
            </div>
            </div>
            </div>`)

} else if (favoriteWeather.toLowerCase() === 'cloudy') {
    document.write(`
            
             <div class="container-cloudy">
            <div class="weather-card-cloudy">
            <h2>Cloudy Weather</h2>
            <p>It's a bright and cloudyy day! Perfect for a picnic or outdoor activities.</p>
            <img src="./Asset/Images/cloudy.gif" alt="Cloudy" class="weather-image">
            </div>
            </div>`)


} else if (favoriteWeather.toLowerCase() === 'stormy') {
    document.write(`
                <div class="container-stormy">
            <div class="weather-card-stormy">
            <h2>Stormy Weather</h2>
            <p>It's a bright and sunny day! Perfect for a picnic or outdoor activities.</p>
            <img src="./Asset/Images/stormy.gif" alt="Sunny" class="weather-image">
            </div>
            </div>  
            `)

} else {
    alert("Sorry, I don't recognize that weather type.");
}


