const generatedCard = document.getElementById('arrayOfBooks')
const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML =
        `<div class="bookItem">
            <div class="bookTitleAndImage">
                <h3 class="name">${animal.name}</h3>
                <img src="./assets/img/${animal.name}.jpg" alt="${animal.name}" class="picture">
            </div>
            <div class="description">
                    <p class="description-paragraph"><span class="description-details">Scientific Name</span>: ${animal.scientificName} </p>
                    <p class="description-paragraph"><span class="description-details">Average Lifespan</span>: ${animal.lifespan} </p>
                    <p class="description-paragraph"><span class="description-details">Average Speed</span>: ${animal.speed} </p>
            </div>
        </div>`;
    return cardHTML
}
// createAnimalTradingCardHTML(cheetah)
// console.log(createAnimalTradingCardHTML(cheetah));

generatedCard.innerHTML = createAnimalTradingCardHTML(cheetah)