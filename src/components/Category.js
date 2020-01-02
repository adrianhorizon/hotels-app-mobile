import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Category = ({ images, name, price, stars, onPress }) => {
  const calification = Math.floor(Math.random() * 500) + 1;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Image style={styles.images} source={{ uri: images[1] }} />
        <View style={styles.containerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>
            $ {price} <Text style={styles.nigth}>por noche</Text>
          </Text>
          <View style={styles.containerRating}>
            <Image
              style={styles.rating}
              source={require('../assets/star.png')}
            />
            <Text style={styles.stars}>
              {stars} <Text style={styles.starsValue}>({calification})</Text>
            </Text>
          </View>
          <Text style={styles.reservation}>Reservar ></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    width: 250,
    height: 290,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 4,
  },
  images: {
    width: 250,
    height: 150,
    resizeMode: 'cover',
  },
  containerText: {
    paddingTop: 5,
    paddingLeft: 15,
  },
  name: {
    color: '#1f2532',
    fontSize: 18,
    paddingVertical: 4,
  },
  price: {
    paddingVertical: 4,
    fontWeight: 'bold',
    color: '#9aa9b9',
    fontSize: 14,
  },
  nigth: {
    fontWeight: 'normal',
  },
  containerRating: {
    flexDirection: 'row',
  },
  rating: {
    marginTop: 4,
    marginRight: 5,
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  stars: {
    color: '#1f2532',
  },
  starsValue: {
    color: '#e0e0e0',
  },
  reservation: {
    paddingVertical: 4,
    color: '#00ddcd',
  },
});

export default Category;
