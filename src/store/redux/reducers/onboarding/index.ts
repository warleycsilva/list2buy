const INITIAL_STATE = {};
const onboardingReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_ONBOARDING':
      return action.payload;
    case 'GET_ONBOARDING':
      return state;
    default:
      return state;
  }
};
export default onboardingReducer;
