import { BOOK_SEARCH } from "./actions";

const initialState = {
    booksArr: [],
    focusArr : []
};

function reducer(state = initialState, action) {
    const { booksArr } = state;
    

    switch (action.type) {
        
        case BOOK_SEARCH : 
            const { books } = action.payload;
            const newState = {...state , booksArr : books}
            return newState;



            
    }
    return state;
}

export default reducer;