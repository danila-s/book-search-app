import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneBookInfo } from '../src/api/api'




function TestComponent() {

    const [bookInfo, setBookInfo] = useState(0);
    const params = useParams();
    const bookId = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        getOneBookInfo(bookId)
            .then(data => {
                setBookInfo(data)
            }).catch(err => {
                console.log(err);
                alert('Что-то пошло не так , обновите страницу.');
            })
    }, [])

    if (bookInfo) {
        return (
            <div className="main-focus">
                <div className="image-container">
                    <div className="second-image-container">
                        {'imageLinks' in bookInfo.volumeInfo && <img className="image" src={bookInfo.volumeInfo.imageLinks.thumbnail} /> || <img src="https://v1.iconsearch.ru/uploads/icons/token/128x128/search.png" />}
                    </div>
                </div>
                <div className="info-container">
                    {'categories' in bookInfo.volumeInfo && <div className="focus-categories-container"> {bookInfo.volumeInfo.categories.map((item, index) => {
                        if (index !== 0) {
                            return <span key={index} className="focus-categories" >/{item}</span>
                        } else {
                            return <span key={index} className="focus-categories" >{item}</span>
                        }
                    })}</div>}
                    <p className="focus-title">{bookInfo.volumeInfo.title}</p>
                    <p className="focus-authors">{'authors' in bookInfo.volumeInfo && bookInfo.volumeInfo.authors.map((item, index) => {
                        return <span key={index}>{item}</span>
                    })}</p>
                    <p className="description">{'description' in bookInfo.volumeInfo && bookInfo.volumeInfo.description || 'Описание отсутствует.'}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}


export default TestComponent