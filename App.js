import { View, Text } from 'react-native';
import React from 'react';
// import de navigationContainer
import { NavigationContainer } from '@react-navigation/native';
// import de createNativeStackNavigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Utilisateurs from './Pages/Utilisateurs';
import Formulaire from './Pages/Formulaire';

// creation du stack pour les pages
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name='DisplayUsers' component={Utilisateurs}/>
        <Stack.Screen name='Formulaire' component={Formulaire}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
