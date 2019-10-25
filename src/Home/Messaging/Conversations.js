import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  Container,
  Fab,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';

const users = [
  {
    name: 'Dave',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Mike',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Mark',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    name: 'Hai',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg',
  },
  {
    name: 'Salman',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2ODE2NDQ5OF5BMl5BanBnXkFtZTcwOTU3OTM1OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
  },
  {
    name: 'Chris',
    avatar: 'https://picsum.photos/id/50/200/300',
  },
  {
    name: 'Sam',
    avatar: 'https://picsum.photos/id/1067/200/300',
  },
  {
    name: 'Ron',
    avatar: 'https://picsum.photos/id/237/200/300',
  },
  {
    name: 'Humberto',
    avatar: 'https://picsum.photos/id/1/200/300',
  },
  {
    name: 'Sweta',
    avatar: 'https://picsum.photos/id/119/200/300',
  },
  {
    name: 'Atharva',
    avatar: 'https://picsum.photos/id/124/200',
  },
  {
    name: 'Frank',
    avatar: 'https://picsum.photos/id/129/200/300',
  },
];

class CPUHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Conversations',
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
      <Container>
        <Content>
          {users.map((u, i) => {
            return (
              <List key={i}>
                <ListItem avatar>
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => this.props.navigation.navigate('Message')}>
                    <Left>
                      <Thumbnail source={{uri: u.avatar}} />
                    </Left>
                    <Body>
                      <Text>{u.name}</Text>
                      <Text note>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corporis quo doloribus mollitia. In sed tempora
                        labore beatae.
                      </Text>
                    </Body>
                    <Right>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </TouchableOpacity>
                </ListItem>
              </List>
            );
          })}
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight">
          <Icon
            name="pen"
            onPress={() => this.props.navigation.navigate('CreateConversation')}
          />
        </Fab>
      </Container>
    );
  }
}

export default CPUHome;
