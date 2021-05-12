const html = require("html-template-tag")


module.exports = (book) => html `<!DOCTYPE html>
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
`