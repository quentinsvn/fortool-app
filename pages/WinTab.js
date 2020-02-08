import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';
import { Container, 
  Header, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Text, Body, 
  Right, 
  Icon, 
  Title, 
  Left, 
  Card, 
  CardItem,
Thumbnail} from 'native-base';
export default class WinScreen extends Component {
  render() {
    return (
        <Container>
          
        <Header style={styles.backgroundColorBar} androidStatusBarColor="#d35400">
          <Left />
          <Body>
            <Title>Fortool</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : 'black'}} ios='ios-wallet' android='ios-wallet'/>
              <Text style={{color: (Platform.OS === 'android') ? 'white' : 'black'}}>640</Text>
            </Button>
          </Right>
        </Header>

        <Content style={{paddingRight: 10, paddingLeft: 10}}>

        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'data:image/png;base64,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'}} />
                <Body>
                  <Text>Publicités</Text>
                  <Text note>Gains: 6 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.jing.fm/clipimg/detail/145-1452569_advertising-png-transparent-images-mobile-ads-icon-png.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="play" />
                  <Text>Regarder</Text>
                </Button>
              </Right>
            </CardItem>
        </Card>

        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/935529696158208000/m-8CPCSG_400x400.jpg'}} />
                <Body>
                  <Text>Tipeeestream</Text>
                  <Text note>Gains: 10 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.tipeeestream.com/img/tipeeestream-preview.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="play" />
                  <Text>Regarder</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://pepperpot.fr/images/utip.png'}} />
                <Body>
                  <Text>uTip</Text>
                  <Text note>Gains: 6 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.libertysgames.fr/wp-content/uploads/2019/04/Utip-libertys-rockstar-mag-naughty-dog-mag-710x399.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="play" />
                  <Text>Regarder</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          
        </Content>

        <Footer>
          <FooterTab style={styles.backgroundColorBar}>
            <Button vertical onPress={() => this.props.navigation.navigate('Home')} >
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="home" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 10 : 12}}>Accueil</Text>
            </Button>
            <Button vertical active style={{backgroundColor: (Platform.OS === 'android') ? '#d35400' : '#E0E0E0'}}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="cash" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 10 : 12}}>Gagner</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Games')}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} active name="logo-game-controller-b" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 10 : 12}}>Jouer</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Shop')}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="cart" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 9.5 : 12}}>Boutique</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Profil')}>
              <Icon  style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="contact" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 10 : 12}} >Profil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  backgroundColorBar: {
    backgroundColor: (Platform.OS === 'android') ? '#F76700' : 'transparent'
  }
  
});