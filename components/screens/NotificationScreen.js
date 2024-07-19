import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import appColor from '../../util/app_colors';

const NotificationScreen = ({ navigation }) => {
  const [disputes, setDisputes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDisputes = async () => {
      try {
        const response = await fetch("http://141.147.32.152:11443/api/dmm/v1.0/disputes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic RlJBTEpPMjdBWFhYOjEyMzQ1Njc4"
          }
        });
        const data = await response.json();
        setDisputes(data.disputes || []);
      } catch (error) {
        console.error('Error fetching disputes:', error);
        setError("Failed to fetch disputes.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDisputes();
  }, []);

  const renderCardItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Dispute', { cardData: item })}
      disabled={item.isUploaded}
    >
      <Text style={styles.cardTitle}>Category: {item.disputeCategory}</Text>
      <Text style={styles.cardTitle}>Subject: {item.subject}</Text>
      <Text style={styles.cardTitle}>Amount: {item.amount.value} {item.amount.currency}</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={appColor.mainColor} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={disputes}
          renderItem={renderCardItem}
          keyExtractor={(item) => item.reference}
          contentContainerStyle={styles.cardContainer}
        />
      )}
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
