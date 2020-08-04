import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import HomeScreen from './screens/Home';
import CrudScreen from './screens/Crud';
import SobreScreen from './screens/Sobre';
import ListaScreen from './screens/Lista';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Crud" component={CrudScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Sobre" component={SobreScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Lista" component={ListaScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
