// we specify how the application state changes in response to certain actions (switch?)

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state, // previous state // reducer is a way to change your state and send it down to your component, we cant just change the state we have to create a new state to send it down
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ), // the change that we want to make
      };
    case "ADD_TRANSACTION":
        return {
            ...state,
            transactions : [...state.transactions,action.payload]
        }
    default:
      return state;
  }
};
