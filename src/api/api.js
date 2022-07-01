const KEY = 'AIzaSyBdpz78rpelIaaBGVAZyzYtJZfo8OU_QV4';


async function getBookList(value, categorie, sorting, startIndex, results) {
   const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}:${categorie}&orderBy=${sorting}&startIndex=${startIndex}&maxResults=${results}&key=${KEY}`)
   const data = await response.json();
   return data
}

async function getOneBookInfo(id) {
   const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
   const data = await response.json();
   return data
}

export { getBookList, getOneBookInfo }