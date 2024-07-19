import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

const SuccessRequest = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Request to return payment</Text>
      <Image source={require('../../assets/images/Confirm.png')} style={styles.image} />
      <Text style={styles.bodyText}>Your request was successfully submitted</Text>
      <Text style={styles.bodyText}>Dispute reference : </Text>
      <Text style={styles.bodyText}>*******</Text>
      <Text style={styles.bodyText}>Expected outcome from dispute</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.lightBackgroundColor,
  },
  titleText: {
    fontSize: 32,
    color: appColor.darkTextColor,
    textAlign: 'center',
    margin: 10,
  },
  bodyText: {
    fontSize: 24,
    margin: 8,
    color: 'grey',
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: 200,
    margin: 25,
  },
});

export default SuccessRequest;
