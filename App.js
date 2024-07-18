import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import TransactionData from './components/screens/TransactionData';
import appColor from './util/app_colors'; // Adjust this path as per your project structure

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: appColor.backgroundColor, // Header background color
          },
          headerTintColor: appColor.textColor, // Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="TransactionData" component={TransactionData} options={{ title: 'Transaction Data' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
