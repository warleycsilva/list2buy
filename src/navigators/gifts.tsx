import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../views/gifts/home';
import {Search} from '../views/gifts/search';
import {GiftList} from '../views/gifts/list';
import {Catalog} from '../views/gifts/catalog';
import {GiftsHeader} from '../components/header';
import OnboardingNavigator from './onboarding';

const StackGifts = createNativeStackNavigator();

export default function GiftsNavigator() {
  return (
    <StackGifts.Navigator initialRouteName={'Home'}>
      <StackGifts.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <StackGifts.Screen
        name={'Catalog'}
        component={Catalog}
        options={{headerTitle: () => <GiftsHeader name={'Catalog'} />}}
      />
      <StackGifts.Screen
        name={'Search'}
        component={Search}
        options={{headerTitle: () => <GiftsHeader name={'Search'} />}}
      />
      <StackGifts.Screen
        name={'GiftList'}
        component={GiftList}
        options={{headerTitle: () => <GiftsHeader name={'Gifts List'} />}}
      />
    </StackGifts.Navigator>
  );
}
