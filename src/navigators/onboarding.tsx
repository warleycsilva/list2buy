import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../views/gifts/home';
import { OnboardingIntroduction } from '../views/onboarding/introduction';
import { OnboardingFinish } from "../views/onboarding/finish";

const StackOnboarding = createNativeStackNavigator();

export default function OnboardingNavigator() {
  return (
    <StackOnboarding.Navigator initialRouteName={'Introduction'}>
      <StackOnboarding.Screen
        name={'Introduction'}
        component={OnboardingIntroduction}
        options={{
          headerShown: false,
        }}
      />
      <StackOnboarding.Screen
        name={'Finish'}
        component={OnboardingFinish}
        options={{
          headerShown: false,
        }}
      />
    </StackOnboarding.Navigator>
  );
}
