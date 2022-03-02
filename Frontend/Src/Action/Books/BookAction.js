import axios from 'axios';app
CREATE_BOOK_SUCCESS,
} from '../actionTypes';

const cresteBookAction =bookData => {
return async dispatch => {
    try{

        dispatch({
            type: 'CREATE_BOOK-REQUEST',
        });
    
        const config =
        'content-type': 'application/json',
    };
        const { data } = await axios.post('/api/books', booksData, config);
    
          dispatch({
                type: CREATE_BOOK_SUCCESS,
                payload: data,
    });
}  catch (error) {}
     dispatch({
         type: CREATE_BOOK_FAIL,
         payload: error.response && error.response.data.massage
     });
    }  
     };
    };

    export {createBookAction};
