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
      <Text style={styles.title}>Request to Return Payment</Text>
      <Image
        source={require('../../assets/images/Confirm.png')}
        style={styles.image}
      />
      <Text style={styles.message}>Your request was successfully submitted</Text>
      <Text style={styles.message}>Dispute reference:</Text>
      <Text style={styles.message}>*******</Text>
      <Text style={styles.message}>Expected outcome from dispute</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.lightBackgroundColor,
    padding: 20, // Added padding to ensure content is not too close to the edges
  },
  title: {
    fontSize: 32,
    color: appColor.darkTextColor,
    textAlign: 'center',
    marginBottom: 20, // Added marginBottom to separate from image
  },
  message: {
    fontSize: 24,
    marginVertical: 8, // Simplified margin for vertical spacing
    color: 'grey',
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: 200,
    marginVertical: 25, // Used marginVertical for consistency
  },
});

export default SuccessRequest;
