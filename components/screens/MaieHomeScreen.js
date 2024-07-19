import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

const MainHomeScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! Please choose what you want to do</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.financialButton]}
          onPress={() => navigateToScreen('Home')}
        >
          <Text style={styles.buttonText}>Financial Problems</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.accountButton]}
          onPress={() => navigateToScreen('AccountProblems')}
        >
          <Text style={styles.buttonText}>Account Problems</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.backgroundColor,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColor.textColor,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  financialButton: {
    backgroundColor: '#28A745', // Success Color
  },
  accountButton: {
    backgroundColor: '#007BFF', // Primary Color
  },
});

export default MainHomeScreen;
