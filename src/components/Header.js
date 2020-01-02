import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.right}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
