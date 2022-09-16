/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigators/main';
import {Provider} from 'react-redux';
import store from './store/redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={[{flex: 1}]}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
