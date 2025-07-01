import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Quote = (props: { text: string }) => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    color: 'aqua',
  },
});

export default Quote;
