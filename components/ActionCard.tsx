/* eslint-disable @typescript-eslint/no-unused-vars */
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// type Props = {};

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.heading}>ActionCard</Text>
      <TouchableOpacity
        onPress={() => openWebsite('https://abhirampjayan.com')}>
        <View style={styles.card}>
          <Text>About Me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
  },
  card: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00cccc',
  },
});
