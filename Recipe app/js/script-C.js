const formCalories = document.getElementById('formCalories')
formCalories.addEventListener('submit',function(event) {
    event.preventDefault();
    let searchValue = searchInput.Value;

    const API_KEY = "f533720512f75adc060d227d84b86489";
    const API_ID = "826799ae";
    const API_URL = "https://api.edamam.com"

    fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=calories=100-300`)

    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        const recipes = data.hits;
        recipesList.innerHTML = ""
        recipes.map((recipeData) => {
            const recipe = recipeData.recipe;
            console.log(recipe);
            let title = document.createElement("h3");
            title.innerText = recipe.label;
            let image = document.createElement("img");
            image.src = recipe.image;
            let calories = document.createElement("p");
            calories.innerText= parseInt(recipe.calories) + "Kcal";
                console.log(parseInt(recipe.calories));
            
            let card = document.createElement("div");
            card.className = "card";

            card.append(title);
            card.append(calories);
            card.append(image);


            recipesList.append(card)
        });
    })
    .catch((e) => console.log(e));
});