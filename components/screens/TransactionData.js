import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

export default function TransactionData({ route }) {
  const { transaction } = route.params;
  const navigation = useNavigation();

  const handleOpenDispute = () => {
    navigation.navigate('RequestConfirmation', {
      transaction: transaction,
    });
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
        <TouchableOpacity style={[styles.button, styles.openDisputeButton]} onPress={handleOpenDispute}>
          <Text style={styles.buttonText}>Open dispute</Text>
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
  buttonText: {
    color: appColor.lightTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
