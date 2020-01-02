import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryListLayout = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingVertical: 5,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default CategoryListLayout;
