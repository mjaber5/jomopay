import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import appColor from './util/app_colors';


export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColor.backgroundColor ,
  },
});
