import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneBookInfo } from '../src/api/api'




function TestComponent() {

    const [bookInfo] = useState();
    const params = useParams();
    const bookId = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        getOneBookInfo(bookId)
            .then(data => {
                
            }).catch(err => {
                console.log(err);
                alert('Что-то пошло не так , обновите страницу.');
            })
    })

    const exit = () => {
        navigate('/')
    }

    return (
        <div onClick={exit}>{bookId}</div>
    )
}


export default TestComponent