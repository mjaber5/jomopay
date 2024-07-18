import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TransactionData({ route, navigation }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaction Details</Text>
      <Text>Message ID: {transaction.MESSAGE_ID}</Text>
      <Text>Amount: {transaction.AMOUNT}</Text>
      <Text>Value Date: {transaction.VALUE_DATE}</Text>
      <Text>Sender BIC: {transaction.SENDER_BIC}</Text>
      <Text>Receiver BIC: {transaction.RECEIVER_BIC}</Text>
      <Text>Currency Code: {transaction.CURR_CODE}</Text>
      <Text>Result: {transaction.RESULT_DESCRIPTION}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3498db' }]}
          onPress={() => {
            // Handle button press
          }}
        >
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#e74c3c' }]}
          onPress={() => {
            // Handle button press
          }}
        >
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
