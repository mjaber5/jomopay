import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import appColor from '../../util/app_colors'; // Adjust this path as per your project structure

export default function TransactionData({ route }) {
  const { transaction } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Message ID:</Text>
        <Text style={styles.value}>{transaction.MESSAGE_ID}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>{transaction.AMOUNT}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Value Date:</Text>
        <Text style={styles.value}>{transaction.VALUE_DATE}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Transaction ID:</Text>
        <Text style={styles.value}>{transaction.TRANS_ID}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Sender BIC:</Text>
        <Text style={styles.value}>{transaction.SENDER_BIC}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Receiver BIC:</Text>
        <Text style={styles.value}>{transaction.RECEIVER_BIC}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Currency Code:</Text>
        <Text style={styles.value}>{transaction.CURR_CODE}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Result Description:</Text>
        <Text style={styles.value}>{transaction.RESULT_DESCRIPTION}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.backgroundColor,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColor.textColor,
    marginBottom: 20,
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
    color: appColor.mainColor,
  },
  value: {
    fontSize: 16,
    color: appColor.textColor,
  },
});
