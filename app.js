const api_main = document.getElementById("main-api");
const search = document.getElementById("input_search");

search.addEventListener('keyup', filterDates)

window.addEventListener('DOMContentLoaded', () => {
    const URL = 'https://rickandmortyapi.com/api/character';
    sendNewURL(URL)
})


function filterDates(e) {
    let newURL = `https://rickandmortyapi.com/api/character/?name=${e.target.value}`
    sendNewURL(newURL);
    api_main.innerHTML = ' ';
}

function sendNewURL(data) {
    fetch(data)
        .then((response) => response.json())
        .then((data) => {
            data.results.map((element) => {
                createCards(element)
            });
        });
}


function createCards(data) {

    const card = document.createElement('div');
    const nameCard = document.createElement('h2');
    const line = document.createElement('hr');
    const genderCard = document.createElement('p');
    const species = document.createElement('p');
    const img_Card = document.createElement('img');

    card.classList.add('card');
    nameCard.classList.add('name-card');
    genderCard.classList.add('gender-card');
    line.classList.add('line-image');
    species.classList.add('species-card');
    img_Card.classList.add('img-card');

    nameCard.textContent = data.name;
    img_Card.setAttribute('id', data.id);
    img_Card.setAttribute('src', data.image);
    img_Card.setAttribute('alt', data.name);
    genderCard.textContent = 'Gender: ' + data.gender;
    species.textContent = 'Specie: ' + data.species;

    card.appendChild(img_Card);
    card.appendChild(nameCard);
    card.appendChild(line);
    card.appendChild(species);
    card.appendChild(genderCard);
    api_main.appendChild(card);

}














