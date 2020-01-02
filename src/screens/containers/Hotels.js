import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

import Header from '../../components/Header';
import HotelsLayout from '../components/Hotels';
import Close from '../../components/Close';
import Details from '../../components/Details';
import TYPES from '../../utils/types';

class Hotels extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  closeHotel = () => {
    this.props.dispatch({
      type: TYPES.SET_HOTELS_ID,
      payload: {
        selectedHotel: null,
      },
    });
  };

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}>
        <HotelsLayout>
          <Header>
            <Close onPress={this.closeHotel} />
          </Header>
          <Details {...this.props.selectedHotel} />
        </HotelsLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedHotel: state.selectedHotel,
  };
};

export default connect(mapStateToProps)(Hotels);
