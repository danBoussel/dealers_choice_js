const express = require('express')
const app = express()

const books_data = require('./books_data')

const morgan = require('morgan')
app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

//!!!=!!!=!!!=!!!=!!!=!!!=!!!=!!!=!!!=!!!=>
//video from youTube NOT working with option #1 (can't find route to youTube video )
// but its working with option #2. 

////--------option #1
////=============================================================home route for all books
// const home = require("./pages/home")

// app.get("/", (req, res, next) => {
//     const books = books_data.list();
//     res.send(home(books));
// });

// ////==========================================================route for book description
// const bookDescription = require('./pages/bookDescription')

// app.get('/description/:id', (req, res, next) => {
//     const book = books_data.find(req.params.id)
//     if (!book.id) {
//         // If the book wasn't found, just throw an error
//         throw new Error('Book Not Found')
//     } else {
//         res.send(bookDescription(book))
//     }

// });

// ////=============================================================== port in browser
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`App listening on PORT ${PORT}`)
// });


////====================================================================


////------option #2
app.get('/', (req, res, next) => {
            res.send(`

<html>
<title>Books Of The Week</title>
<link rel="stylesheet" href="/style.css" />
<body>

<header>B<div class='eye'><div class='eye-in'><div></div></div></div> <div class='eye'><div class='eye-in'><div></div></div></div> ks Of The Week</header>
<div class='wrapper'>
${books_data.list().map(book =>`
<div class='book-box'>
<img src= ${book.img}/>
<h2>${book.title}</h2>
<p class='author'>${book.author}</p>
<a class='button' href='/description/${book.id}' >Description</a>
</div>
`).join('')}
</div>
</body>
</html>
`
);
});



app.get('/description/:id', (req, res, next) => {

    const book = books_data.find(req.params.id)
    if (!book.id) {
        // If the book wasn't found, just throw an error

        throw new Error('Book Not Found')
    } else {
        res.send(`
<html>
<title>Books Of The Week</title>
<link rel="stylesheet" href="/style.css" />
<body>

<header>B<div class='eye'><div class='eye-in'><div></div></div></div> <div class='eye'><div class='eye-in'><div></div></div></div> ks Of The Week</header>
<div class='description-wrapper'>
<div class='book-box'>
<img src= ${book.img}/>
<h2>${book.title}</h2>
<p class='author'>${book.author}</p>
<a class='button' href='/' >Back to Books</a>
</div>
<div class='description'>
<iFrame ${book.video}></iFrame>
<p>${book.description}</p>
<a class='button' href='${book.readmore}' >Read More </a>
</div>
</div>
</body>
</html>
`)
    }
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
});