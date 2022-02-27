import React from "react";
import './Book.css'


class Book extends React.Component {

    render(){
        const {bookInfo} = this.props
        console.log(bookInfo)
        return (
            <div className="book">
                <p>{bookInfo.volumeInfo.title}</p>
                 <img src = {bookInfo.volumeInfo.imageLinks.thumbnail} />  
            </div>
        ) 
    }
}

export default Book