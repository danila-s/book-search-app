import { BOOK_SEARCH , FOCUS , CHANGE_LOADING , LOAD_MORE , ACTUAL_INFO} from "./actions";

const initialState = {
    booksArr: [],
    focus : '',
    isLoad : false ,
    startIndex : 0 ,
    results : 30 ,
    string : '' ,
    focusCategory :'',
    sorting : 'relevance'
};

function reducer(state = initialState, action) {
    const { booksArr } = state;
    

    switch (action.type) {
        
        case BOOK_SEARCH : 
            const { books } = action.payload;
            const newState = {...state , booksArr : books , startIndex : state.startIndex + 30}
            return newState;

        case FOCUS :
            const { id } = action.payload;
            const newStateId = {...state , focus : id}
            return newStateId;

        case CHANGE_LOADING :
            const newLoadStatus = !state.isLoad;
            const newStateIsLoad = {...state , isLoad : newLoadStatus}
            return newStateIsLoad;

        case LOAD_MORE :
            const { newBooks } = action.payload;
            const newArr = [...state.booksArr];
            newBooks.forEach(item => {
                newArr.push(item)
            })
            const addedState = {...state , booksArr:newArr , startIndex : state.startIndex + 30};
            return addedState;

        case ACTUAL_INFO :
            const {info} = action.payload;
            const actualState = {...state , string : info[0] , focusCategory : info[1] , sorting : info[2]}
            return actualState;


            
    }
    return state;
}

export default reducer;