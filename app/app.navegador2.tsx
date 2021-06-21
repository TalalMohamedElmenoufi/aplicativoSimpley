import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from './screens/login/login';
import { Home } from './screens/home/home';
import { Register } from './screens/login/register';
import { navigationRef } from './routes/rootNavegation';

import App from '../App';

const Stack = createStackNavigator();

const AppNavigator2 = () => (

    <NavigationContainer ref={navigationRef}>

                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Register"
                        component={Register}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Home"
                        component={Home}
                    />

                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="App"
                        component={App}
                    />

                </Stack.Navigator>

    </NavigationContainer>

)

export default AppNavigator2;