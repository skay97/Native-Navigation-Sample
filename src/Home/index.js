import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import SettingsStackNavigator from './Settings';
import MessagingStackNavigator from './Messaging';

const TabsScreen = createBottomTabNavigator({
  Messaging: {
    screen: MessagingStackNavigator,
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
      tabBarLabel: 'Settings Tab',
      tabBarIcon: ({tintColor}) => (
        <Icon name="cog" size={17} color={tintColor} />
      ),
    },
  },
});

export default createStackNavigator({TabsScreen}, {headerMode: 'none'});
