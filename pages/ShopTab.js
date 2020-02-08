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
export default class ShopScreen extends Component {
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
                <Thumbnail source={{uri: 'https://cdn.discordapp.com/attachments/519799997534044170/658780431289679872/logo_fortnite.png'}} />
                <Body>
                  <Text>Fortnite</Text>
                  <Text note>Minimum: 767 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="basket" />
                  <Text>Commander</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.discordapp.com/attachments/519799997534044170/658785861491621898/paypal.png'}} />
                <Body>
                  <Text>PayPal</Text>
                  <Text note>Minimum: 2000 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="basket" />
                  <Text>Commander</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.discordapp.com/attachments/519799997534044170/658787089109745715/circlemoney.png'}} />
                <Body>
                  <Text>Fortcoins</Text>
                  <Text note>Minimum: 1€</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="basket" />
                  <Text>Commander</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.discordapp.com/attachments/519799997534044170/658828512379011103/discord2.png'}} />
                <Body>
                  <Text>Discord Nitro</Text>
                  <Text note>Minimum: 2000 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="basket" />
                  <Text>Commander</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.pinclipart.com/picdir/middle/487-4874977_we-seamlessly-become-the-voice-of-your-company.png'}} />
                <Body>
                  <Text>Amazon</Text>
                  <Text note>Minimum: 2000 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="basket" />
                  <Text>Commander</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.discordapp.com/attachments/519799997534044170/658822568819818496/paysafe.png'}} />
                <Body>
                  <Text>PaysafeCard</Text>
                  <Text note>Minimum: 4000 Fortcoins</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left/>
              <Right>
              <Button transparent>
                  <Icon active name="basket" />
                  <Text>Commander</Text>
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
            <Button vertical onPress={() => this.props.navigation.navigate('Win')}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="cash" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 10 : 12}}>Gagner</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Games')}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} active name="logo-game-controller-b" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 10 : 12}}>Jouer</Text>
            </Button>
            <Button vertical active style={{backgroundColor: (Platform.OS === 'android') ? '#d35400' : '#E0E0E0'}}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="cart" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 9.5 : 12}}>Boutique</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Profil')}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="contact" />
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