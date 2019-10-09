import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import SettingsStackNavigator from './Settings';
import HomeStackNavigator from './Messaging';

const Tabs = createBottomTabNavigator({
  Messaging: {
    screen: HomeStackNavigator,
    navigationOptions: {
      title: 'Conversations',
      tabBarIcon: ({tintColor}) => (
        <Icon name="envelope-open-text" size={17} color={tintColor} />
      ),
    },
  },
  Settings: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Memory Tab',
      tabBarIcon: ({tintColor}) => (
        <Icon name="cog" size={17} color={tintColor} />
      ),
    },
  },
});

export default createStackNavigator({Tabs}, {headerMode: 'none'});
