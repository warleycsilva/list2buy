const INITIAL_STATE = {gifts: []};
const giftsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'GET_LIST':
      return true;
    case 'DELETE_LIST_ITEM':
      return {gifts: handleRemoveGift(action.payload, state.gifts)};
    case 'ADD_LIST_ITEM':
      return {gifts: [...state.gifts, action.payload]};
    default:
      return state;
  }
};
const handleRemoveGift = (item: string, gifts: string[]) => {
  const giftIndex = gifts.indexOf(item);
  gifts.splice(giftIndex, 1);
  return gifts;
};
export default giftsReducer;
