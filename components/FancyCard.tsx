import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Inspired by Atomic Habits</Text>
          <Text style={styles.cardDescription}>
            How a book influenced me to create this app.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  headingText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    borderTopLeftRadius: 18,
    marginVertical: 18,
    marginHorizontal: 18,
  },
  cardBody: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingVertical: 18,
    paddingBottom: 24,
    backgroundColor: '#eaeaea',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  cardTitle: {
    fontSize: 20,
    paddingBottom: 4,
  },
  cardDescription: {
    color: '#777777',
  },
  cardElevated: {},
  cardImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 300,
  },
});
