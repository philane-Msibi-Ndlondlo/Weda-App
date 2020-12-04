import React from 'react'
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';

const Search = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search</Text>
      <Button onPress={() => navigation.goBack()} title="Go To Search" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Search
