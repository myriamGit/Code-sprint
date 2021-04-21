const formCalories = document.getElementById('formCalories')
formCalories.addEventListener('submit',function(event) {
    event.preventDefault();
    let searchValue = searchInput.Value;

    const API_KEY = "f533720512f75adc060d227d84b86489";
    const API_ID = "826799ae";
    const API_URL = "https://api.edamam.com"
    alert( Math.round(n*100)/100);

    fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=calories=100-300`)

    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        const recipes = data.hits;
        recipes.map((recipeData) => {
            const recipe = recipeData.recipe;
            console.log(recipe);
            let title = document.createElement("h3");
            title.innerText = recipe.label;
            let time = document.createElement("p");
            time.innerText = recipe.totalTime + "min";
            let image = document.createElement("img");
            image.src = recipe.image;
            let calories = document.createElement("p");
            calories.innerText = recipe.calories;
            let card = document.createElement("div");
            card.className = "card";

            card.append(title);
            card.append(time);
            card.append(image);
            card.append(calories);

            caloriesList.append(card)
        });
    })
    .catch((e) => console.log(e));
});