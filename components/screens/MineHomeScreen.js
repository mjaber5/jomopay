import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

const MainHomeScreen = () => {
  const navigation = useNavigation();

  const handleGoToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcom Please chose what you whant to do</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28A745' }]} // Success Color
          onPress={handleGoToHomeScreen}
        >
          <Text style={styles.buttonText}>Financial Problems</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007BFF' }]} // Primary Color
          onPress={() => {
            // First Button Action (placeholder)
            console.log('First Button Pressed');
          }}
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
});

export default MainHomeScreen;
