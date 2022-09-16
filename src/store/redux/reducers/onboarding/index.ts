export const onboardingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ONBOARDING_COMPLETED':
      return true;
    case 'GET_ONBOARDING_COMPLETED':
      return state;
    default:
      return state;
  }
};
