const KEY = 'AIzaSyBdpz78rpelIaaBGVAZyzYtJZfo8OU_QV4';


async function  getBookList  (value , categorie , sorting){
     const response =  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}:${categorie}&orderBy=${sorting}&key=${KEY}`)
     const data = await response.json();
     return data
  }

  export {getBookList}