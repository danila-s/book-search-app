import React from "react";
import './Book.css'


class Book extends React.Component {

    render(){
        const {bookInfo} = this.props
        console.log(bookInfo)
        return (
            <div className="book">    
                 { 'imageLinks' in bookInfo.volumeInfo && <img src = {bookInfo.volumeInfo.imageLinks.thumbnail} /> || <img src="https://v1.iconsearch.ru/uploads/icons/token/128x128/search.png" />}
                 <p className="categories">{bookInfo.volumeInfo.categories}</p>
                 <p className="title-book">{bookInfo.volumeInfo.title}</p> 
                 {bookInfo.volumeInfo.authors && bookInfo.volumeInfo.authors.map((item , index) => {
                     if(index === 0){
                        return <span className="authors" key={index}>{item}</span>    
                     }else{
                        return <span className="authors" key={index}> , {item}</span>  
                     }
                     
                 })} 
            </div>
        ) 
    }
}

export default Book