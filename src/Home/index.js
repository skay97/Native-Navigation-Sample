import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import SettingsStackNavigator from './Settings';
import HomeStackNavigator from './Messaging';

const SettingsTabs = createBottomTabNavigator({
  Messaging: {
    screen: HomeStackNavigator,
    navigationOptions: {
      title: 'Conversations Tab',
      tabBarIcon: ({tintColor}) => (
        <Icon name="microchip" size={17} color={tintColor} />
      ),
    },
  },
  Settings: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Memory Tab',
      tabBarIcon: ({tintColor}) => (
        <Icon name="memory" size={17} color={tintColor} />
      ),
    },
  },
});

export default createStackNavigator({SettingsTabs}, {headerMode: 'none'});
