const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "6GmlIfGgP4p7f6vadC/jGg==hpICkbWqivDlp6WQ";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },

};

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
    
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    
        console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error occured; \n" + error;
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        
    }

}

btnEl.addEventListener("click", getJoke)