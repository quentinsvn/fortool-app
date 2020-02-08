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
export default class GamesScreen extends Component {
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

        <Content style={{marginRight: 10, marginLeft: 10}}>

        <Card>
            <CardItem>
                <Body style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={{fontWeight: 'bold'}}>Aucun jeux disponible pour le moment...</Text>
                </Body>
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
            <Button vertical active style={{backgroundColor: (Platform.OS === 'android') ? '#d35400' : '#E0E0E0'}}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} active name="logo-game-controller-b" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 10 : 12}}>Jouer</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Shop')}>
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