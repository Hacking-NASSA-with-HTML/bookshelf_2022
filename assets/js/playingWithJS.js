
const grabTheMainButton = document.getElementById('addBookButtonDiv')

// grabTheMainButton.addEventListener('click', greeting)

// function greeting() {
//     console.log('Hi !')
// }

const warehouse = [
    {
        title: 'this-is-title-456',
        content: 'the quick brown fox jumped',
        date: '18.2.2028'
    },

    {
        title: 'this-is-title-789',
        content: 'the jumped fox fell in a pit',
        date: '19.12.2020'
    }
]

const books = [
    {
        title: 'this-is-title-123',
        content: 'Lorem ipsum dolor sit amet',
        date: '12.8.2009'
    },
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
    document.querySelector('#bookObjectKeeper').innerHTML = posts.join();
}

document.querySelector('#bookObjectKeeper').innerHTML = posts.join();