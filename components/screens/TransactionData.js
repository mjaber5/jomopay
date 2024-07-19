import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

export default function TransactionData({ route }) {
  const { transaction } = route.params;
  const navigation = useNavigation();

  // Convert transaction date to Date object
  const getTransactionDate = (dateString) => {
    // Assuming dateString format is 'YYYY-MM-DD' (ISO format)
    return new Date(dateString);
  };

  const transactionDate = getTransactionDate(transaction.VALUE_DATE);
  const currentDate = new Date();

  // Calculate the number of days between the two dates
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.floor((currentDate - transactionDate) / millisecondsInADay);

  // Disable the button if transaction is older than 6 days
  const isButtonDisabled = daysDifference >= 6;

  const handleOpenDispute = () => {
    if (!isButtonDisabled) {
      navigation.navigate('RequestConfirmation', {
        transaction: transaction,
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>{transaction.AMOUNT}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Value Date</Text>
          <Text style={styles.value}>{transaction.VALUE_DATE}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Sender BIC</Text>
          <Text style={styles.value}>{transaction.SENDER_BIC}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Receiver BIC</Text>
          <Text style={styles.value}>{transaction.RECEIVER_BIC}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Currency Code</Text>
          <Text style={styles.value}>{transaction.CURR_CODE}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.openDisputeButton, isButtonDisabled && styles.buttonDisabled]}
          onPress={handleOpenDispute}
          disabled={isButtonDisabled}
        >
          <Text style={[styles.buttonText, isButtonDisabled && styles.buttonTextDisabled]}>Open dispute</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: appColor.lightBackgroundColor,
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 100,
  },
  detailContainer: {
    marginBottom: 15,
    backgroundColor: appColor.secondBackgroundColor,
    padding: 10,
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: appColor.lightTextColor,
  },
  value: {
    fontSize: 16,
    color: appColor.lightTextColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: appColor.lightBackgroundColor,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  openDisputeButton: {
    backgroundColor: appColor.secondBackgroundColor,
  },
  buttonDisabled: {
    backgroundColor: '#ccc', // Light gray color to indicate disabled state
  },
  buttonText: {
    color: appColor.lightTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#888', // Light gray color for disabled text
  },
});
