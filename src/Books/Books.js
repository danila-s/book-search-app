import React from "react";
import Book from "./Book/Book";
import './Books.css'

class Books extends React.Component {

    render () {
        const {booksArr} = this.props;
        return(
            <div className="books">
                {booksArr.map((item , index) => {
                    return <Book 
                    bookInfo = {item}
                    key = {index}
                    />
                })}
            </div>
        )
    }
}

export default Books