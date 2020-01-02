import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Stars = stars => {
  const starElements = [];
  for (let i = 0; i < stars; i++) {
    starElements.push(
      <Image
        key={i}
        style={styles.rating}
        source={require('../assets/starPastel.png')}
      />,
    );
  }
  return starElements;
};

const Details = ({ name, stars, images }) => {
  const calification = Math.floor(Math.random() * 500) + 1;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.cover} source={{ uri: images[0] }} />
      <View style={styles.top}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.containerRating}>
        {Stars(stars)}
        <Text style={styles.starsValue}>({calification}) Visitas</Text>
      </View>

      <View style={styles.top}>
        <Text style={styles.detail}>DETALLES</Text>
        <Text style={styles.subDetail}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trailer: {
    height: 200,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: '100%',
    height: 340,
    borderRadius: 20,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#35404C',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  },
  containerRating: {
    padding: 20,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  rating: {
    marginRight: 5,
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  starsValue: {
    color: '#9F9F9F',
  },
  detail: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#192225',
  },
  subDetail: {
    color: '#9F9F9F',
    lineHeight: 24,
  },
});

export default Details;
