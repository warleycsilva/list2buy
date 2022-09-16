import {combineReducers} from 'redux';
import onboardingReducer from './onboarding';
import giftsReducer from './gifts';

export const rootReducer = combineReducers({
  onboardingReducer,
  giftsReducer,
});
