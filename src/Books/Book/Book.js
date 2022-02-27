import React from "react";
import './Book.css'


class Book extends React.Component {

    render(){
        const {bookInfo} = this.props
        return (
            <div className="book">
                <p>{bookInfo.volumeInfo.title}</p>
            </div>
        ) 
    }
}

export default Book