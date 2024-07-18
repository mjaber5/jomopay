import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import appColor from '../util/app_colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden/>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Home</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Text style={styles.buttonText}>Recall</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.backgroundColor,
  },
  appBar: {
    height: 60,
    backgroundColor: appColor.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: appColor.textColor,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: appColor.secondBackgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonSecondary: {
    backgroundColor: appColor.secondBackgroundColor,
  },
  buttonText: {
    color: appColor.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
