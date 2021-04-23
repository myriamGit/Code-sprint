const formCocktail = document.getElementById('formCocktail')
formCocktail.addEventListener('submit',function(event) {
    event.preventDefault();
    let searchValue = searchInput.Value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)

    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const drinks = data.drinks;
        recipesList.innerHTML = ""
        drinks.map((drinksData) => {
          console.log(drinksData);
          let title = document.createElement("h2");
          title.innerText = drinksData.strDrink;
          let image = document.createElement("img");
          image.src = drinksData.strDrinkThumb;
          let category = document.createElement("h4");
          category.innerText = drinksData.strCategory;
          let ingredients = document.createElement ("li");
          ingredients.innerText = (drinksData.strIngredient1);
          let ingredients2 = document.createElement ("li");
          ingredients2.innerText = (drinksData.strIngredient2);
          let ingredients3 = document.createElement ("li");
          ingredients3.innerText = (drinksData.strIngredient3);
          let card = document.createElement("div");
          card.className = "card";

          card.append(title);
          card.append(category);
          card.append(ingredients);
          card.append(ingredients2);
          card.append(ingredients3);
          card.append(image);

          recipesList.append(card)
        
        });
})
    .catch((e) => console.log(e));
});
