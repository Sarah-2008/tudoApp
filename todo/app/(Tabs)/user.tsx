import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/build/layouts/Tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function user() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Text style={styles.container}>    
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }, 
  main: {
    width: '50%',
    height: '50%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    borderRadius: 15,
    padding: 110,
    backgroundColor: '#ffffff'
  },
  nav: {
    textAlign: "center",
    padding: 10,
    fontSize: 30
  },

})