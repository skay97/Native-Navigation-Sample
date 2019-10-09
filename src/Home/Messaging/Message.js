import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Message extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Text Thread</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Message;
