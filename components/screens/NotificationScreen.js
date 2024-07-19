import { View, Text, StyleSheet, FlatList } from 'react-native';
import appColor from '../../util/app_colors';
import { useState, useEffect } from 'react';

const NotificationScreen = () => {
  const [disputes, setDisputes] = useState([]);

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
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching disputes:', error);
      });
  }, []);
  const renderDisputeItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Reference: {item.reference}</Text>
      <Text style={styles.itemText}>Category: {item.disputeCategory}</Text>
      <Text style={styles.itemText}>Subject: {item.subject}</Text>
      <Text style={styles.itemText}>Amount: {item.amount.value} {item.amount.currency}</Text>
      <Text style={styles.itemText}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={disputes}
        renderItem={renderDisputeItem}
        keyExtractor={item => item.reference} // Ensure you have a unique key for each item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.backgroundColor,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    color: appColor.textColor,
  },
});

export default NotificationScreen;
