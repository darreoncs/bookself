const books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 309,
        year: 1997,
        genre: "Fantasy"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkein",
        pages: 310,
        year: 1937,
        genre: "Fantasy"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        year: 1925,
        genre: "Fiction"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 163,
        year: 1988,
        genre: "Fiction"
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        pages: 432,
        year: 2012,
        genre: "Mystery"
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        pages: 336,
        year: 2019,
        genre: "Mystery"
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        pages: 374,
        year: 2008,
        genre: "Science Fiction"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkein",
        pages: 423,
        year: 1954,
        genre: "Fantasy"
    }
];

function render(booksToShow) {

    const bookList = document.getElementById("bookList");

    const bookHTML = booksToShow.map(function(book) {
        return `
            <div>
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Year: ${book.year}</p>
                <p>Genre: ${book.genre}</p>
            </div>
        `;
    });

    bookList.innerHTML = bookHTML.join("");

    document.getElementById("bookCount").textContent =
        `Showing ${booksToShow.length} of ${books.length} books`;
}

render(books);

document.getElementById("sortTitle").addEventListener("click", function() {

    const sortedBooks = [...books].sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });

    render(sortedBooks);
});


document.getElementById("sortPages").addEventListener("click", function() {

    const sortedBooks = [...books].sort(function(a, b) {
        return a.pages - b.pages;
    });

    render(sortedBooks);
});


document.getElementById("sortYear").addEventListener("click", function() {

    const sortedBooks = [...books].sort(function(a, b) {
        return a.year - b.year;
    });

    render(sortedBooks);
});

document.getElementById("genreFilter").addEventListener("change", function() {

    const selectedGenre = this.value;

    if (selectedGenre === "All") {
        render(books);
    } else {

        const filteredBooks = books
            .filter(function(book) {
                return book.genre === selectedGenre;
            })
            .sort(function(a, b) {
                return a.title.localeCompare(b.title);
            });

        render(filteredBooks);
    }
});
