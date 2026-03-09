import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function user() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* ICONE */}
        <View> 
         <Ionicons style={styles.container} name='person' size={100} color={"#000000"}/>
        </View>

        {/* Texto */}
      <Text style={styles.Text}>Usuário
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
    textAlign: "center",
    color: "#000000"
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
  Text: {
    textAlign: "center",
    padding: 50,
    fontSize: 35,
    color: "#000"
  },

})