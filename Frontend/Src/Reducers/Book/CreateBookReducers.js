import {CREATE_BOOK_REQUEST} from '../../actions/actions/'

const CreateBookReducer =(State={}, action) => {
    switch(action,type) {
        case CREATE_BOOK_REQUEST;
        return {
            loading: true,
        };
        case CREATE_BOOK_SUCCESS:
            return {
                book: action.payload,
            };

            case CREATE_BOOK_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

             default:
                 return State;
    }
};

export { CreateBookReducer };
