const formCocktail = document.getElementById('formCocktail')
formCocktail.addEventListener('submit',function(event) {
    event.preventDefault();
    let searchValue = searchInput.Value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)

    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        const formCocktailHTML = document.getElementById("formCocktail");
        formCocktailHTML.innerHTML = ""
        Cocktail.map((drinksData) => {
          const cocktail = cocktailData.drinks;
          console.log(cocktail);
          let title = Array.createElement("strDrink");
          title.innerText = cocktail.label;
          let image = document.createElement("strDrinkThumb");
          image.src = cocktail.image;

          card.className = "card";

          card.append(title);
          card.append(image);
          cocktail.append(card)
        
        });
})
    .catch((e) => console.log(e));
});
