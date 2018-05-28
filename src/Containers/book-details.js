import React, { Component } from 'react';
import { connect } from 'react-redux';  // This import call literally turns our once upon a time component into a container, by connecting it to react-redux

class BookDetail extends Component 
{
    render()
    {
        if (!this.props.book) // check if the prop which is mapped to state (application) is null or not before referencing it later below.
        {
            return <div> Select a book to get started! </div>
        }

        return (
            <div >
                <h3> Details for: </h3>
                    <div> Title: { this.props.book.title } </div>
                    <div> Pages: { this.props.book.pages } </div>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {

        book: state.activeBook

    };
}


export default connect(mapStateToProps)(BookDetail);