import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import appColor from '../../util/app_colors';

const Dispute = ({ route, navigation }) => {
  const { cardData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Category:</Text>
        <Text style={styles.detail}>{cardData.disputeCategory}</Text>
        <Text style={styles.detailLabel}>Subject:</Text>
        <Text style={styles.detail}>{cardData.subject}</Text>
        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detail}>{cardData.amount.value} {cardData.amount.currency}</Text>
        <Text style={styles.detailLabel}>Status:</Text>
        <Text style={styles.detail}>{cardData.status}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#DC3545' }]} // Cancel Color
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007BFF' }]} // Primary Color
          onPress={() => {
            // Add Attachment functionality
          }}
        >
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007BFF' }]} // Primary Color
          onPress={() => {
            // Reply functionality
          }}
        >
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007BFF' }]} // Primary Color
          onPress={() => {
            // Reply functionality
          }}
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: appColor.textColor,
    marginBottom: 20,
    textAlign: 'center',
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
    marginVertical: 5, // Added marginVertical for better spacing
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
