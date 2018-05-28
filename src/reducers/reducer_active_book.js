// State argument is not application state
// It is ONLY the state this reducer is responsible for
export default function (state = null, action)
{
    switch (action.type)
    {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    // Basically the below is the default case if the action type that is being dispatched to this reducer is not one that we wanted, we return null
    return state; 
}