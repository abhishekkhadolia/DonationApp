import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../routes/Routes';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import OTPLogin from '../screens/OTPLogin/OTPLogin';
const Stack = createStackNavigator();

const MyNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.OTPLogin} component={OTPLogin} />
      <Stack.Screen name={Routes.Register} component={Register} />
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MyNavigation;
