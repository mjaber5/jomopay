import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import appColor from '../../util/app_colors';
import { useRoute, useNavigation } from '@react-navigation/native';

const Dispute = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Destructure cardData and transaction from route.params with default empty objects
  const { cardData = {}} = route.params || {};

  // Ensure VALUE_DATE is defined in cardData
  const valueDate = cardData.valueDate || 'N/A';
console.log(cardData);
  // Set initial amount state, default to empty string if transaction.AMOUNT is undefined

  const handleReplay = () => {
    navigation.navigate('ReplayScreen', {
      replayData: {
        alias: cardData.alias,
        beneficiaryName: cardData.beneficiaryName,
        amount: `${cardData.amount.value} ${cardData.amount.currency}`,
        type: cardData.type,
        date: cardData.date,
        returnAmount: cardData.returnAmount,
        reason: cardData.reason,
        subCategory: cardData.subCategory,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Category:</Text>
        <Text style={styles.detail}>{cardData.disputeCategory || 'N/A'}</Text>
        <Text style={styles.detailLabel}>Subject:</Text>
        <Text style={styles.detail}>{cardData.subject || 'N/A'}</Text>
        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detail}>{cardData.amount ? `${cardData.amount.value} ${cardData.amount.currency}` : 'N/A'}</Text>
        <Text style={styles.detailLabel}>Status:</Text>
        <Text style={styles.detail}>{cardData.status || 'N/A'}</Text>
        <Text style={styles.detailLabel}>Value Date:</Text>
        <Text style={styles.detail}>{valueDate}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#DC3545' }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007BFF' }]}
          onPress={handleReplay}
        >
          <Text style={styles.buttonText}>Add Attachment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007BFF' }]}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Reply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007BFF' }]}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Assign</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: appColor.mainColor,
  },
  detailsContainer: {
    marginBottom: 30,
    padding: 20,
    borderRadius: 12,
    backgroundColor: appColor.secondBackgroundColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: appColor.lightTextColor,
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
    color: appColor.lightTextColor,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
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
    textAlign: 'center',
  },
});

export default Dispute;
