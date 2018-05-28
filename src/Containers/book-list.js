import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component
{

    renderList()
    {
        return this.props.books.map( (book) => {
            return (   // remember when using Map function need a key and here since the title is unique to each item it makes sense to use it for the key, as the key needs to be a unique signature throughout the entire list.
                <li 
                    key = {book.title} 
                    onClick = { () => this.props.selectBook(book)} // selectBook call here is calling an ACTION function being called!!
                    className = "list-group-item" > 
                    {book.title}
                </li>
            );
        });
    }


    render()
    {
        return (
            <ul className = "list-group col-sm-4">
                {this.renderList()}
            </ul>

        );
    }
}


function mapStateToProps(state)
{
    // Whatever is returned from here will show up as props inside of BookList
    return{
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch)
{
    // Whenever selectBook is called, the result should be passed to all of our reducers.
    // The dispatch is what sends all the actions to all the reducers.
    // FYI to remember that selectBook is in fact a function and not a variable. 
    // selectBook is an actionCreator which is always a function, which we made in the index.js file in the actions folder.
    return bindActionCreators( { selectBook: selectBook }, dispatch);
}


// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. 
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);