const formanalyse = document.getElementById('formanalyse')
formanalyse.addEventListener('submit',function(event) {
    event.preventDefault();
    let searchValue = formanalyse.Value;

    const app_id = "a991fb00a5eea5f58f323acd13ca36be	";
    const app_key = "0548a291";
    const API_URL = "https://api.edamam.com"

    fetch(`https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`)

    
    .catch((e) => console.log(e));
});