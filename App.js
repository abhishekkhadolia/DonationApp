import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyNavigation from './navigation/MyNavigation';
import {Provider} from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
