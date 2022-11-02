
const grabTheMainButton = document.getElementById('buttonToAddNewBook')

const warehouse = [
    {
        name: 'Matrix',
        title: 'Matrix',
        content: 'Lorem ipsum dolor sit amet',
        date: '2009'
    },

    {
        name: 'Scarface',
        title: 'Scarface',
        content: 'the quick brown fox jumped',
        date: '2018'
    },

    {
        name: 'Terminator',
        title: 'Terminator',
        content: 'The jumped fox fell in a pit',
        date: '2020'
    }
]

const books = []

const posts = books.map(book => `
    <div class="bookItem">
        <div class="bookTitleAndImage">
            <h3 class="name">${book.title}</h3>
            <img src="./assets/img/${book.name}.jpg" alt="${book.name}" class="picture">
        </div>
        <div class="description">
            <p class="description-paragraph">${book.content}</p>
            <p class="description-paragraph">${book.date}</p></div>
        </div>
    </div>
    `)

grabTheMainButton.addEventListener('click', addBookToShelf)
let counter = 0;
function addBookToShelf() {
    if (counter === warehouse.length) {
        alert("The warehouse is empty!");
        return
    }
    books.unshift(warehouse[counter])
    console.log(books)
    const posts = books.map(book => `
    <div class="bookItem">
        <div class="bookTitleAndImage">
            <h3 class="name">${book.title}</h3>
            <img src="./assets/img/${book.name}.jpg" alt="${book.name}" class="picture">
        </div>
        <div class="description">
            <p class="description-paragraph">${book.content}</p>
            <p class="description-paragraph">${book.date}</p></div>
        </div>
    </div>
        `)
    counter++
    document.querySelector('#bookKeeperDiv').innerHTML = posts.join().trim()
}

document.querySelector('#bookKeeperDiv').innerHTML = posts.join().trim()