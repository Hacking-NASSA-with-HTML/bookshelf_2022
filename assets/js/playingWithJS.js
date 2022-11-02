
const grabTheMainButton = document.getElementById('addBookButtonDiv')

// grabTheMainButton.addEventListener('click', greeting)

// function greeting() {
//     console.log('Hi !')
// }

const warehouse = [
    {
        title: 'Book Title-456',
        content: 'the quick brown fox jumped',
        date: '2018'
    },

    {
        title: 'Book Title-789',
        content: 'The jumped fox fell in a pit',
        date: '2020'
    }
]

const books = [
    {
        title: 'Book Title-123',
        content: 'Lorem ipsum dolor sit amet',
        date: '2009'
    }
]

const posts = books.map(book => `
    <div class="bookItem">
        <div class="bookTitleAndImage">
            <h3 class="name">${book.title}</h3>
            <p class="description-paragraph">${book.content}</p>
            <p class="description-paragraph">${book.date}</p>
        </div>
    </div>
    `)
// document.querySelector('#bookObjectKeeper').innerHTML = posts.join().trim()

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
                <p class="description-paragraph">${book.content}</p>
                <p class="description-paragraph">${book.date}</p>
            </div>
        </div>
        `)
    counter++
    document.querySelector('#bookKeeperDiv').innerHTML = posts.join().trim()
}

document.querySelector('#bookKeeperDiv').innerHTML = posts.join().trim()