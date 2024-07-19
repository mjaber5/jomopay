import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import appColor from '../../util/app_colors';

const NotificationScreen = ({ navigation }) => {
  const [disputes, setDisputes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic RlJBTEpPMjdBWFhYOjEyMzQ1Njc4"
      }
    };
    fetch("http://141.147.32.152:11443/api/dmm/v1.0/disputes", requestOptions)
      .then(response => response.json())
      .then(data => {
        setDisputes(data.disputes || []);
        setIsLoading(false);
        setError("");
      })
      .catch(error => {
        console.error('Error fetching disputes:', error);
        setIsLoading(false);
        setError("Failed to fetch disputes.");
      });
  }, []);

  const renderCardItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Dispute', { cardData: item })}
      disabled={item.isUploaded} // Disable the card if the dispute is already uploaded
    >
      <Text style={styles.cardTitle}>Category: {item.disputeCategory}</Text>
      <Text style={styles.cardTitle}>Subject: {item.subject}</Text>
      <Text style={styles.cardTitle}>Amount: {item.amount.value} {item.amount.currency}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={appColor.mainColor} />
      ) : (
        <FlatList
          data={disputes}
          renderItem={renderCardItem}
          keyExtractor={(item) => item.reference}
          contentContainerStyle={styles.cardContainer}
        />
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.backgroundColor,
    padding: 20,
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
    fontSize: 18,
    color: appColor.textColor,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default NotificationScreen;
