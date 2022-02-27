const BOOK_SEARCH = 'BOOK_SEARCH';

function searchBooks(books) {
    return {
      type: BOOK_SEARCH,
      payload: {
        books: books
      },
    };
  }


export{BOOK_SEARCH , searchBooks}