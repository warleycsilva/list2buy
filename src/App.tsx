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
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigators/main';
import {Provider} from 'react-redux';
import store, {persistor} from './store/redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <View style={[{flex: 1}]}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
