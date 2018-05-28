import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// This file is where our global state is contained.  Global as in our application state.  This is the epicenter.
const rootReducer = combineReducers({
  // Remember any key below which is inside our combineReducers call, ends up as a key on our global state
  // Each reducer needs to have 1 key, which containers from outside (or smart components) will access using the keys below.
  // **** IMPORTANT: Remember Reducers are responsible for manipulating (changing) our application state over time and they do that through the use of actions
  // So whenever those actions are dispatched, they flow throughout every single reducer in our application 
  // And each reducer has the option to return a different piece of state than usual based on the type of action that was received
  // Another caveat: Every reducer is always called with 'state' and 'action' every time in the parameters of the reducer function
  // If you check we dont call anything in the reducer_books.js reducer but it is being called anyways.  Keep in mind


  // **** IMPORTANT:  Also should be noted someone asked Stephen Grider if this combineReducer method is the "Redux Store"
  // He wrote back and I quote: 
  // "It'd be most appropriate to say that the redux store makes use of the result 
  // of this 'combineReducers' call - the store doesn't live inside the combineReducers helper."

  books: BooksReducer,
  activeBook: ActiveBook

});

export default rootReducer;

