import {createStore, CombineReducers, } from 'redux';
imort thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [thunk];

const reducer = combinereducer({
  bookCreated: createBookReducer, 
});


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
  );
export {store };
