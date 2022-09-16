const INITIAL_STATE = {completed: false};
const onboardingReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_ONBOARDING':
      return {completed: action.payload};
    case 'GET_ONBOARDING':
      return state;
    default:
      return state;
  }
};
export default onboardingReducer;
