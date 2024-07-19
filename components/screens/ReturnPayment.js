import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ReturnPayment = () => {
  const route = useRoute();
  const { replayData = {} } = route.params || {}; // Provide a default value if params is undefined
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  const handleNoPress = () => {
    navigation.navigate('Home');
  };

  const handleYesPress = async () => {
    try {
      await returnMoney(amount, replayData);
      navigation.navigate('SuccessRequest');
    } catch (error) {
      console.error('Error returning money:', error);
      Alert.alert('Error', 'There was an error processing your request. Please try again.');
    }
  };

  const returnMoney = async (amount, replayData) => {
    try {
      const response = await fetch('http://example.com/api/return-money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic RlJBTEpPMjdBWFhYOjEyMzQ1Njc4',
        },
        body: JSON.stringify({
          amount,
          replayData,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming success if the response is not an error
      return;
    } catch (error) {
      console.error('Error fetching return money:', error);
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Amount to Return</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#DC3545' }]}
          onPress={handleNoPress}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28A745' }]}
          onPress={handleYesPress}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReturnPayment;
