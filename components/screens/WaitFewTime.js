import React, { useEffect } from 'react';
import { View, Text, StyleSheet , ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';

const WaitFewTime = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SuccessRequest');
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={appColor.darkBackgroundColor}/>
      <Text style={styles.text}>Loading...</Text>
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
  text: {
    margin:10,
    fontSize: 18,
    color: appColor.textColor,
    textAlign: 'center',
  },
});

export default WaitFewTime;
