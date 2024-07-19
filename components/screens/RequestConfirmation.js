import React, { useState } from 'react';
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

  const categories = ['Technical Issues TECH', 'Wrong Beneficiary WRBN', 'Alias/Phone Number Misassignment'];
  const subCategories = ['Account was not credited', 'Misdirected payments', 'Alias mismatch with customer'];

  const handleAmountChange = (input) => {
    let newAmount = parseFloat(input);

    if (isNaN(newAmount) || newAmount < 0) {
      Alert.alert('Invalid Amount', 'Amount must be greater than or equal 0.');
      newAmount = '';
    } else if (newAmount > parseFloat(transaction.AMOUNT)) {
      Alert.alert('Exceeded Amount', `Amount should not exceed the transaction amount of ${transaction.AMOUNT}.`);
      newAmount = transaction.AMOUNT.toString();
    } else {
      newAmount = input;
    }
    setAmount(newAmount);
  };

  const handleYesButtonPress = () => {
    navigation.navigate('WaitFewTime');
  };

  const handleNoButtonPress = () => {
    navigation.navigate('UnSuccessRequest');
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
        {categories.map((category, index) => (
          <Picker.Item key={index} label={category} value={category} />
        ))}
      </Picker>
      <Picker
        selectedValue={selectedSubCategory}
        onValueChange={(itemValue) => setSelectedSubCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Sub-Category" value="" />
        {subCategories.map((subCategory, index) => (
          <Picker.Item key={index} label={subCategory} value={subCategory} />
        ))}
      </Picker>

      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        value={new Date().toLocaleDateString()}
        editable={false}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: appColor.secondBackgroundColor }]} onPress={handleYesButtonPress}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: appColor.secondBackgroundColor }]} onPress={handleNoButtonPress}>
          <Text style={styles.buttonText}>No</Text>
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
    backgroundColor: appColor.lightBackgroundColor,
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
    color: "black",
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
    color: appColor.darkTextColor,
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
    color: appColor.lightTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RequestConfirmation;
