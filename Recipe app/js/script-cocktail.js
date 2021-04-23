const formCocktail = document.getElementById('formCocktail')
formCocktail.addEventListener('submit',function(event) {
    event.preventDefault();
    let searchValue = searchInput.Value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)

    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        const formCocktailHTML = document.getElementById("formCocktail");
        recipesListHTML.innerHTML = ""
        recipes.map((recipeData) => {
          const recipe = recipeData.drinks;
          console.log(recipe);
          let title = document.createElement("strDrink");
          title.innerText = recipe.label;
          let image = document.createElement("strDrinkThumb");
          image.src = recipe.image;
          let card = document.createElement("div");
          card.className = "card";

          card.append(title);
          card.append(image);
          recipesList.append(card)
        
        });
})
    .catch((e) => console.log(e));
});
