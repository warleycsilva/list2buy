import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GiftsNavigator from './gifts';
import OnboardingNavigator from './onboarding';
import {useSelector} from 'react-redux';

const StackMain = createNativeStackNavigator();

export default function MainNavigator() {
  const hasCompletedOnboarding = useSelector(
    state => state.onboarding.completed,
  );
  return (
    <StackMain.Navigator
      initialRouteName={hasCompletedOnboarding ? 'Gifts' : 'Onboarding'}>
      <StackMain.Screen
        name={'Gifts'}
        component={GiftsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <StackMain.Screen
        name={'Onboarding'}
        component={OnboardingNavigator}
        options={{
          headerShown: false,
        }}
      />
    </StackMain.Navigator>
  );
}
