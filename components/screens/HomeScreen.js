import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appColor from '../../util/app_colors';
import jsonData from '../../util/data.json';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setCardsData(jsonData);
  }, []);

  const handleCardPress = (card) => {
    navigation.navigate('TransactionData', { transaction: card });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Text style={styles.cardTitle}>{item.MESSAGE_ID}</Text>
      <Text>Amount: {item.AMOUNT}</Text>
      <Text>Value Date: {item.VALUE_DATE}</Text>
      <Text>Receiver: {item.RECEIVER_BIC}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardsData}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.MESSAGE_ID}
        contentContainerStyle={styles.cardContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.lightBackgroundColor,
    paddingHorizontal: 20,
  },
  cardContainer: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: appColor.mainColor,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
