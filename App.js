import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <>
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
