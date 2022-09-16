export const giftsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return true;
    case 'DELETE_LIST_ITEM':
      return true;
    case 'ADD_LIST_ITEM':
      return true;
    default:
      return state;
  }
};
