import React from 'react';
import {View,} from 'react-native';
import SearchBarh from 'react-native-material-design-searchbar';
import PropTypes from 'prop-types';


export default class SearchBar extends React.Component {


  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

      <View>
        <SearchBarh
          onSearchChange={this.props.onSearchChange}
          height={this.props.height}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          placeholder={this.props.placeholder}
          autoCorrect={this.props.autoCorrect}
          padding={this.props.padding}
          returnKeyType={this.props.returnKeyType}
          onBackPress={this.props.onBackPress}
        />
      </View>
    )
  }
}
SearchBar.propTypes = {
  onSearchChange:PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  height:PropTypes.number,
  onFocus:PropTypes.func,
  onBlur:PropTypes.func,
  placeholder:PropTypes.string,
  autoCorrect:PropTypes.bool,
  padding:PropTypes.number,
  returnKeyType:PropTypes.string,

};
SearchBar.defaultProps={
  height:50,
  onFocus:()=>{},
  onBlur:()=>{},
  placeholder:"Arama Yapınız..",
  autoCorrect:false,
  padding:5,
  returnKeyType:"search"
};