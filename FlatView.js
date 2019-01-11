import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from './ListItem';

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(): void {
    console.log(this.props.header)
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.data.map((item, idx) => <ListItem item={item} content={this.props.content} header={this.props.header} key={idx}/>)
        }
      </ScrollView>
    )
  }
}

ListView.propTypes = {
  data: PropTypes.array.isRequired
};
