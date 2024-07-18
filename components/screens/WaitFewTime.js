import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

const WaitFewTime = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SuccessRequest');
    }, 3000); // 30 seconds

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please wait a few moments...</Text>
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

export default WaitFewTime;
