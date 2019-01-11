import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acik: false,
      width: Dimensions.get('window').width
    }
  }

  ac = () => {
    this.setState({acik: !this.state.acik})
  };

  render() {
    return (
      <TouchableHighlight onPress={this.ac} underlayColor={'rgba(0,0,0,0.2)'}>
        <View style={[styles.container, {padding: !this.state.acik ? 12 : 5}]}>
          <View>
            <Text style={[styles.stokAdiStyle]}>
              &#8226; {' ' + this.props.item[this.props.header]}
            </Text>
          </View>
          <View>
            {this.state.acik ?
              <View>
                {
                  this.props.content.map((x,idx) =>
                    <Text key={idx} style={styles.adetlerStyle}>
                      &#8594; {x}: {this.props.item[x]}
                    </Text>
                  )
                }

              </View> : null

            }
          </View>
        </View>
      </TouchableHighlight>

    )
  }
};

const styles = StyleSheet.create({
    adetlerStyle: {
      color: 'darkred',
      fontSize: 20,
      display: 'flex',
      fontWeight: 'bold'
    },
    stokAdiStyle: {
      fontSize: 20,
      marginRight: 20,
      fontWeight: 'bold'
    },
    anasayfa: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    container: {
      padding: 5,
      marginLeft: 9,
      marginRight: 9,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,

    }
  })
;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};