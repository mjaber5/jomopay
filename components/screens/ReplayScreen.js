import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useNavigation and useRoute for navigation and route params
import appColor from '../../util/app_colors';

const ReplayScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Destructure replayData from route.params with a default empty object
  const { replayData = {} } = route.params || {};
console.log(route);
  // Handle button presses
  const handleNoPress = async () => {
    try {
      // Call the replayDispute function if needed
      await replayDispute(replayData.id); // Assuming replayData has an id field
      navigation.navigate('Home');
      console.log('Dispute replied with additional information.');
    } catch (error) {
      console.error('Error replying to dispute:', error);
    }
  };
console.log(replayData)
  const handleYesPress = () => {
    navigation.navigate('ReturnPayment');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Request to Return Payment Details</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Alias / IBAN</Text>
        <Text style={styles.detail}>{replayData.alias || 'N/A'}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Beneficiary Name</Text>
        <Text style={styles.detail}>{replayData.beneficiaryName || 'N/A'}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Amount</Text>
        <Text style={styles.detail}>{replayData.amount || 'N/A'}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Type</Text>
        <Text style={styles.detail}>{replayData.type || 'N/A'}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.detail}>{replayData.date || 'N/A'}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Return Amount</Text>
        <Text style={styles.detail}>{replayData.returnAmount || 'N/A'}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Reason (category)</Text>
        <Text style={styles.detail}>{replayData.reason || 'N/A'}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Sub-category</Text>
        <Text style={styles.detail}>{replayData.subCategory || 'N/A'}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#DC3545' }]}
          onPress={handleNoPress} // Set the handler for "No"
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
    </ScrollView>
  );
};

const replayDispute = async (replayDataId) => {
  try {
    const response = await fetch(`http://141.147.32.152:11443/api/dmm/v1.0/disputes/${replayDataId}/reply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Charset': 'UTF-8',
        'Authorization': 'Basic RlJBTEpPMjdBWFhYOjEyMzQ1Njc4',
      },
      body: JSON.stringify({
        "message": "Add more information to dispute",
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error during API request:', error);
    throw error; // Rethrow error to be caught in the handleNoPress function
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    color: appColor.darkTextColor,
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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

export default ReplayScreen;
