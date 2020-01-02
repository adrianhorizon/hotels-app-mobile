import React, { Component } from 'react';
import { View } from 'react-native';
import Layout from '../components/Suggestions-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/Vertical-separator';
import Suggestion from '../components/Suggestions';
import { connect } from 'react-redux';
import TYPES from '../utils/types';

class SuggestionList extends Component {
  viewHotel = item => {
    this.props.dispatch({
      type: TYPES.SET_HOTELS_LIST,
      payload: {
        selectedHotel: item,
      },
    });
  };

  render() {
    if (!this.props.hotels) {
      return <Empty text="no hay sugerencias :(" />;
    }
    return (
      <Layout title="Alojamientos en todo el mundo">
        {this.props.hotels.map(hotel => {
          return (
            <View key={hotel._id}>
              <Suggestion {...hotel} onPress={() => this.viewHotel(hotel)} />
              <Separator />
            </View>
          );
        })}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: state.hotelsList,
  };
};

export default connect(mapStateToProps)(SuggestionList);
