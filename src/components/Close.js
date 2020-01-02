import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Close = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff7175',
    borderRadius: 12,
    width: 26,
    height: 26,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Close;
