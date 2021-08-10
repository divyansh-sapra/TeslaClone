import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CarsList from './components/CarList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header />

      <CarsList />

      <StatusBar style="auto" hidden = {true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
