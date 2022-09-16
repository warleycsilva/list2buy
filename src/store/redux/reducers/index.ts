import {onboardingReducer} from './onboarding';
import {giftsReducer} from './gifts';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  onboardingReducer,
  giftsReducer,
});
