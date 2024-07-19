import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import appColor from '../../util/app_colors';

const AssignScreen = ({ route }) => {
  const { cardData } = route.params || {};

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
        <Text style={styles.detail}>{cardData.valueDate || 'N/A'}</Text>
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
});

export default AssignScreen;
