import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/Category-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/Horizontal-separator';
import Category from '../components/Category';
import TYPES from '../utils/types';

class CategoryList extends Component {
  keyExtractor = ({ _id }) => _id.toString();
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  renderItem = ({ item }) => (
    <Category {...item} onPress={() => this.viewHotel(item)} />
  );
  viewHotel = item => {
    this.props.dispatch({
      type: TYPES.SET_HOTELS_LIST,
      payload: {
        selectedHotel: item,
      },
    });
  };

  render() {
    return (
      <Layout title="Lo que te gustaría encontrar">
        <FlatList
          horizontal
          data={this.props.hotels}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          showsHorizontalScrollIndicator={false}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: state.categoryList,
  };
};

export default connect(mapStateToProps)(CategoryList);
