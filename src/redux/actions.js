const BOOK_SEARCH = 'BOOK_SEARCH';
const CHANGE_LOADING = 'CHANGE_LOADING'
const LOAD_MORE = 'LOAD_MORE'
const ACTUAL_INFO = 'ACTUAL_INFO'

function searchBooks(books) {
  return {
    type: BOOK_SEARCH,
    payload: {
      books: books
    },
  };
}

function loadMore(newBooks) {
  return {
    type: LOAD_MORE,
    payload: {
      newBooks: newBooks
    },
  };
}

function changeLoading() {
  return { type: CHANGE_LOADING }
}

function actualInfo(info) {
  return {
    type: ACTUAL_INFO,
    payload: {
      info: info
    },
  };
}



export { BOOK_SEARCH,  CHANGE_LOADING, LOAD_MORE, ACTUAL_INFO, searchBooks,  changeLoading, loadMore, actualInfo } 