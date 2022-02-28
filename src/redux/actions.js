const BOOK_SEARCH = 'BOOK_SEARCH';
const FOCUS = 'FOCUS'

function searchBooks(books) {
    return {
      type: BOOK_SEARCH,
      payload: {
        books: books
      },
    };
  }

function focus (id) {
  return {
    type: FOCUS,
    payload: {
      id: id
    },
  };
}



export{BOOK_SEARCH , FOCUS , searchBooks , focus} 