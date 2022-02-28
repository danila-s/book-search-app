import React from "react";
import './FocusBook.css'

class FocusBook extends React.Component {

    render(){
        const {book} = this.props;

        return (
            <div className="main-focus">
                <div className="image-container">
                { 'imageLinks' in book.volumeInfo && <img className="image" src = {book.volumeInfo.imageLinks.thumbnail} /> || <img src="https://v1.iconsearch.ru/uploads/icons/token/128x128/search.png" />}
                </div>
                <div className="info-container">
                {'categories' in book.volumeInfo && <div className="focus-categories-container"> {book.volumeInfo.categories.map((item , index) => {
                    if(index !== 0){
                        return <span key={index} className="focus-categories" >/{item}</span>
                    }else {
                        return <span key={index} className="focus-categories" >{item}</span>
                    }
                })}</div>}
                <p className="focus-title">{book.volumeInfo.title}</p>
                <p className="focus-authors">{'authors' in book.volumeInfo && book.volumeInfo.authors.map((item , index) => {
                    return <span key={index}>{item}</span>
                })}</p>
                <p className="description">{'description' in book.volumeInfo && book.volumeInfo.description || 'Описание отсутствует.' }</p>
                </div>

            </div>
        )
    }
}


export default FocusBook