import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/screens/HomeScreen';
import TransactionData from './components/screens/TransactionData';
import RequestConfirmation from './components/screens/RequestConfirmation';
import SuccessRequest from './components/screens/SuccessRequest';
import NotificationScreen from './components/screens/NotificationScreen';
import WaitFewTime from './components/screens/WaitFewTime';
import appColor from './util/app_colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: appColor.secondBackgroundColor,
          },
          headerTintColor: appColor.lightTextColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Icon
              name="notifications-outline"
              size={25}
              color={appColor.lightTextColor}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('NotificationScreen')}
            />
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="TransactionData" component={TransactionData} options={{ title: 'Transaction Data' }} />
        <Stack.Screen name="RequestConfirmation" component={RequestConfirmation} options={{ title: 'Request Confirmation' }} />
        <Stack.Screen name="SuccessRequest" component={SuccessRequest} options={{ title: 'Success' }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ title: 'Notifications' }} />
        <Stack.Screen name="WaitFewTime" component={WaitFewTime} options={{ title: 'Please Wait' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
