const BOOK_SEARCH = 'BOOK_SEARCH';
const FOCUS = 'FOCUS';
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

function focus (id) {
  return {
    type: FOCUS,
    payload: {
      id: id
    },
  };
}

function loadMore (newBooks){
  return {
    type: LOAD_MORE,
    payload: {
      newBooks: newBooks
    },
  };
}

function changeLoading (){
  return {type : CHANGE_LOADING}
}

function actualInfo (info){
  return {
    type: ACTUAL_INFO,
    payload: {
      info: info
    },
  };
}



export{BOOK_SEARCH , FOCUS , CHANGE_LOADING, LOAD_MORE, ACTUAL_INFO, searchBooks , focus , changeLoading , loadMore , actualInfo} 