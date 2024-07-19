import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import appColor from '../../util/app_colors';

const RequestConfirmation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { transaction } = route.params;

  const [amount, setAmount] = useState(transaction.AMOUNT.toString());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const categories = ['TECH', 'WRBN', 'APNM'];
  const subCategories = ['ACNS', 'MSPY', 'APMM'];

  useEffect(() => {
    const categoryIndex = categories.indexOf(selectedCategory);
    setSelectedSubCategory(subCategories[categoryIndex] || '');
  }, [selectedCategory]);

  const handleAmountChange = (input) => {
    let newAmount = parseFloat(input);

    if (isNaN(newAmount) || newAmount < 0) {
      Alert.alert('Invalid Amount', 'Amount must be greater than or equal to 0.');
      newAmount = '';
    } else if (newAmount > parseFloat(transaction.AMOUNT)) {
      Alert.alert('Exceeded Amount', `Amount should not exceed the transaction amount of ${transaction.AMOUNT}.`);
      newAmount = transaction.AMOUNT.toString();
    } else {
      newAmount = input;
    }
    setAmount(newAmount);
  };

  const registerDispute = async () => {
    try {
      const response = await fetch('http://141.147.32.152:11443/api/dmm/v1.0/disputes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Charset': 'UTF-8',
          'Authorization': 'Basic RlJBTEpPMjdBWFhYOjEyMzQ1Njc4',
        },
        body: JSON.stringify({
          reference: new Date().getTime().toString(),
          respondent: { BIC: transaction.RECEIVER_BIC },
          disputeCategory: selectedCategory,
          subject: selectedSubCategory,
          message: "Description of dispute for receiver, example: There was typo in creditor account, please replace it with account 12345678998076",
          amount: {
            currency: "JOD",
            value: parseFloat(amount),
          },
          originalPayment: {
            messageId: transaction.MESSAGE_ID,
            transactionId: transaction.TRANS_ID,
            valueDate: transaction.VALUE_DATE,
            orderingInstitution: { BIC: transaction.SENDER_BIC },
          },
        }),
      });

      if (!response.ok) {
        const responseText = await response.text();
        console.error('Error status code:', response.status);
        console.error('Error status text:', response.statusText);
        console.error('Error response body:', responseText);
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }

      Alert.alert('Success', 'Dispute registered successfully');
      navigation.navigate('NotificationScreen');

    } catch (error) {
      Alert.alert('Error', `Failed to register dispute: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={transaction.SENDER_BIC}
        editable={false}
      />
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={handleAmountChange}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Category" value="" />
        {categories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>
      <Picker
        selectedValue={selectedSubCategory}
        style={styles.picker}
        enabled={false} // Disable Picker
      >
        <Picker.Item label="Select Sub-Category" value="" />
        {subCategories.map((subCategory) => (
          <Picker.Item key={subCategory} label={subCategory} value={subCategory} />
        ))}
      </Picker>
      <TextInput
        style={styles.message}
        multiline
        placeholder="Enter message here..."
        numberOfLines={4}
      />
      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        value={new Date().toLocaleDateString()}
        editable={false}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: appColor.secondBackgroundColor }]}
          onPress={registerDispute}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: appColor.secondBackgroundColor }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: appColor.backgroundColor,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: appColor.textColor,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: appColor.mainColor,
    color: 'black',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
    color: appColor.textColor,
    backgroundColor: appColor.mainColor,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    height: 50,
    width: '48%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: appColor.textColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: appColor.mainColor,
    color: appColor.textColor,
    textAlignVertical: 'top',
    height: 100,
  },
});

export default RequestConfirmation;
