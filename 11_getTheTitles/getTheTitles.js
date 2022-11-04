const getTheTitles = function(books) {
    var bookList = [];
    for (book of books){
        bookList.push(book.title);
    }

    return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
