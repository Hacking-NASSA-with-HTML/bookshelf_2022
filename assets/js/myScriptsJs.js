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
                <ul class="details">
                    <li><span class="bold">Scientific Name</span>: ${animal.scientificName} </li>
                    <li><span class="bold">Average Lifespan</span>: ${animal.lifespan} </li>
                    <li><span class="bold">Average Speed</span>: ${animal.speed} </li>
                </ul>
            </div>
        </div>`;
    return cardHTML
}
// createAnimalTradingCardHTML(cheetah)
// console.log(createAnimalTradingCardHTML(cheetah));

generatedCard.innerHTML = createAnimalTradingCardHTML(cheetah)