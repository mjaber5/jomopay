import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

const SuccessRequest = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Request Successfully Submitted!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.backgroundColor,
  },
  text: {
    fontSize: 24,
    color: appColor.textColor,
    textAlign: 'center',
  },
});

export default SuccessRequest;
