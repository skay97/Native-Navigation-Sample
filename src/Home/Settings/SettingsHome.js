import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';

class SettingsHome extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Settings',
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={20} />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View style={Styles.container}>
        <Text>This is where your settings live</Text>
        <Icon name="cog" size={48} />
      </View>
    );
  }
}

export default SettingsHome;
