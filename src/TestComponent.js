import React from 'react';
import { useParams } from 'react-router-dom';




function TestComponent (){
    const params = useParams();
    const bookId = params.id;
    
        return(
            <div>{bookId}</div>
        )
    }


export default TestComponent