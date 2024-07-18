import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appColor from '../../util/app_colors';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications</Text>
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

export default NotificationScreen;
