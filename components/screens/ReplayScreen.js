import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import appColor from '../../util/app_colors';

const ReplayScreen = ({ route }) => {
  const { replayData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Request to Return Payment Details</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Alias / IBAN</Text>
        <Text style={styles.detail}>{replayData.alias}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Beneficiary Name</Text>
        <Text style={styles.detail}>{replayData.beneficiaryName}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Amount</Text>
        <Text style={styles.detail}>{replayData.amount}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Type</Text>
        <Text style={styles.detail}>{replayData.type}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.detail}>{replayData.date}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Return Amount</Text>
        <Text style={styles.detail}>{replayData.returnAmount}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Reason (category)</Text>
        <Text style={styles.detail}>{replayData.reason}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Sub-category</Text>
        <Text style={styles.detail}>{replayData.subCategory}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#DC3545' }]}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28A745' }]}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
    color:appColor.darkTextColor,
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
