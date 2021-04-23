const formCocktail = document.getElementById('formCocktail')
formCocktail.addEventListener('submit',function(event) {
    event.preventDefault();
    let = searchInput.Value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)

    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        const formCocktailHTML = document.getElementById("formCocktail");
        formCocktailHTML.innerHTML = `
          <h2>${res.drinks.strDrink}</h2>`
        ;
        })
    .catch((e) => console.log(e));
})