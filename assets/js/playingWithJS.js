
const grabTheMainButton = document.getElementById('addBookButtonDiv')

// grabTheMainButton.addEventListener('click', greeting)

// function greeting() {
//     console.log('Hi !')
// }


const books = [
    {
        title: 'this-is-title-123',
        content: 'Lorem ipsum dolor sit amet',
        date: '12.8.2009'
    },

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

const posts = books.map(book => `
  <div>
    <h2>${book.title}</h2>
    <p>${book.content}</p>
    <time>${book.date}</time>
  </div>
`)


grabTheMainButton.addEventListener('click', addBookToShelf)
function addBookToShelf() {
    document.querySelector('#bookObjectKeeper').innerHTML = posts.join('\n');
}