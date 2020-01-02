import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import API from './utils/api';
import TYPES from './utils/types';
import Header from './components/Header';
import Home from './screens/containers/Home';
import CategoryList from './containers/Category-list';
import SuggestionList from './containers/Suggestions-list';
import Search from './containers/Search';
import Hotels from './screens/containers/Hotels';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getHotel();
    this.props.dispatch({
      type: TYPES.SET_CATEGORY_LIST,
      payload: {
        categoryList,
      },
    });

    const hotelsList = await API.getHotel();
    this.props.dispatch({
      type: TYPES.SET_HOTELS_LIST,
      payload: {
        hotelsList,
      },
    });
  }

  render() {
    if (this.props.selectedHotel) {
      return <Hotels />;
    }
    return (
      <Home>
        <Header />
        <Search />
        <ScrollView>
          <CategoryList />
          <SuggestionList />
        </ScrollView>
      </Home>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedHotel: state.selectedHotel,
  };
};

export default connect(mapStateToProps)(AppLayout);
