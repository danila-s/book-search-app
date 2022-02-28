import { BOOK_SEARCH , FOCUS } from "./actions";

const initialState = {
    booksArr: [],
    focus : ''
};

function reducer(state = initialState, action) {
    const { booksArr } = state;
    

    switch (action.type) {
        
        case BOOK_SEARCH : 
            const { books } = action.payload;
            const newState = {...state , booksArr : books}
            return newState;

        case FOCUS :
            const { id } = action.payload;
            const newStateId = {...state , focus : id}
            return newStateId;

            
    }
    return state;
}

export default reducer;