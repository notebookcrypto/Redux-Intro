export function selectBook(book)  // This file is called an ACTION CREATOR
{
    //console.log('A book has been selected:', book.title);

    // selectBook is an ActionCreator, it needs to return an action.
    // Which is an object with a type property.  
    // Every action usually has 2 properties: a type to describe the object (always has this) 
    // and a payload (or data) that further or clarifies the conditions of the action being triggered (sometimes but not always has this).
    return {
        type: 'BOOK_SELECTED',
        payload: book // remember all the payload is, is just more information about the action that is being called.
    };


}