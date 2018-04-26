import React from 'react';
import {Alert, StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function home(props) {
  return (
    <View style={styles.container}>
      <Text>I'm going to bed now, when should I wake up?</Text>
      <Button
        large
        title='Going to bed now'
       onPress={() => {Alert.alert('You tapped the button!');}}/>
      <Text>I need to pick a certain time, when should I wake up or go to bed?</Text>
      <Button
        large
        title='Pick a time'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});