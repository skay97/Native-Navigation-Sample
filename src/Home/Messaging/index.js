import {createStackNavigator} from 'react-navigation-stack';
import Conversations from './Conversations';
import Message from './Message';
import CreateConversation from './Create-Conversation';

export default createStackNavigator({
  Conversations,
  Message,
  CreateConversation,
});
