import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../views/gifts/home';
import {Search} from '../views/gifts/search';
import {GiftList} from '../views/gifts/list';
import {Catalog} from '../views/gifts/catalog';
import GiftsNavigator from './gifts';
import OnboardingNavigator from './onboarding';

const StackMain = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <StackMain.Navigator initialRouteName={'Onboarding'}>
      <StackMain.Screen
        name={'Onboarding'}
        component={OnboardingNavigator}
        options={{
          headerShown: false,
        }}
      />
      <StackMain.Screen
        name={'Gifts'}
        component={GiftsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </StackMain.Navigator>
  );
}
