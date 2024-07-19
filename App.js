import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/screens/HomeScreen';
import TransactionData from './components/screens/TransactionData';
import RequestConfirmation from './components/screens/RequestConfirmation';
import SuccessRequest from './components/screens/SuccessRequest';
import NotificationScreen from './components/screens/NotificationScreen';
import Dispute from './components/screens/Dispute'; // Import the Dispute screen
import MainHomeScreen from './components/screens/MaieHomeScreen'; // Corrected import path
import appColor from './util/app_colors';
import ReplayScreen from './components/screens/ReplayScreen';
import ReturnPayment from './components/screens/ReturnPayment';
import ReadScreen from './components/screens/ReadScreen'; // Import ReadScreen
import AssignScreen from './components/screens/AssignScreen'; // Import AssignScreen
import AccountProblems from './components/screens/AccountProblems'; // Import AccountProblems

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainHome"
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
        <Stack.Screen 
          name="MainHome" 
          component={MainHomeScreen} 
          options={{ title: 'Main Home Screen' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="TransactionData" 
          component={TransactionData} 
          options={{ title: 'Transaction Data' }} 
        />
        <Stack.Screen 
          name="RequestConfirmation" 
          component={RequestConfirmation} 
          options={{ title: 'Request Confirmation' }} 
        />
        <Stack.Screen 
          name="SuccessRequest" 
          component={SuccessRequest} 
          options={{ title: 'Success' }} 
        />
        <Stack.Screen 
          name="NotificationScreen" 
          component={NotificationScreen} 
          options={{ title: 'Notifications' }} 
        />
        <Stack.Screen 
          name="Dispute" 
          component={Dispute} 
          options={{ title: 'Dispute' }} 
        />
        <Stack.Screen 
          name="ReplayScreen" 
          component={ReplayScreen} 
          options={{ title: 'Replay' }} 
        />
        <Stack.Screen 
          name="ReturnPayment" 
          component={ReturnPayment} 
          options={{ title: 'Return Payment' }} 
        />
        <Stack.Screen 
          name="ReadScreen" 
          component={ReadScreen} 
          options={{ title: 'Read' }} 
        />
        <Stack.Screen 
          name="AssignScreen" 
          component={AssignScreen} 
          options={{ title: 'Assign' }} 
        />
        <Stack.Screen 
          name="AccountProblems" 
          component={AccountProblems} 
          options={{ title: 'Account Problems' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
