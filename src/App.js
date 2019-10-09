import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabsScreen from './Home'; //Tab Nav
import Profile from './Profile'; //Stack Nav
import settingsHomeStack from './Home/Settings/index';

const App = createDrawerNavigator({
  Conversations: {
    screen: TabsScreen,
    navigationOptions: {
      drawerLabel: 'Conversations',
      drawerIcon: ({tintColor}) => <Icon name="cog" size={17} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({tintColor}) => <Icon name="user-circle" size={17} />,
    },
  },
  Settings: {
    screen: settingsHomeStack,
    navigationOptions: {
      drawerLabel: 'Settings Drawer',
      drawerIcon: ({tintColor}) => <Icon name="cog" size={17} />,
    },
  },
});

export default createAppContainer(App);
