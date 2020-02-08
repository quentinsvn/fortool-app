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
  H1,
  ListItem,
  Switch,
Thumbnail,
Label} from 'native-base';
export default class ProfilScreen extends Component {
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


          <Body style={{flexDirection: "row", justifyContent: "center", marginTop: 20}}>
            <Image style={{width: 150, height: 150, borderRadius: 100, backgroundColor: 'black'}} source={{uri: 'https://cdn.discordapp.com/avatars/204272604448555009/a_3c942bb6517ba116232792d230f1ecf8.png?size=128'}}/>
          </Body>
          <Body>
            <H1 style={{fontWeight: "bold", marginTop:15}}>Salut Quentin!</H1>
            <Label>Niveau 1</Label>
          </Body>

          <Content style={{marginTop: 30}}>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#333" }}>
                  <Icon active name="moon" />
                </Button>
              </Left>
              <Body>
                <Text>Mode sombre</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#F76700" }}>
                  <Icon active name="alarm" />
                </Button>
              </Left>
              <Body>
                <Text>Activités récentes</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#F76700" }}>
                  <Icon active name="people" />
                </Button>
              </Left>
              <Body>
                <Text>Parrainage</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#F76700" }}>
                  <Icon active name="list" />
                </Button>
              </Left>
              <Body>
                <Text>Mes commandes</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#F76700" }}>
                  <Icon active name="gift" />
                </Button>
              </Left>
              <Body>
                <Text>Utiliser un code</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#F76700" }}>
                  <Icon active name="settings" />
                </Button>
              </Left>
              <Body>
                <Text>Paramètres de mon compte</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
        </Content>

        <Content style={{marginTop: 30}}>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#F76700" }}>
                  <Icon active name="mail" />
                </Button>
              </Left>
              <Body>
                <Text>Aide</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#F76700" }}>
                  <Icon active name="share" />
                </Button>
              </Left>
              <Body>
                <Text>Partager l'application</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#d63031" }}>
                  <Icon active name="exit" />
                </Button>
              </Left>
              <Body>
                <Text>Se déconnecter</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
        </Content>

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
            <Button vertical onPress={() => this.props.navigation.navigate('Shop')}>
              <Icon style={{color: (Platform.OS === 'android') ? 'white' : '#333333'}} name="cart" />
              <Text style={{color: (Platform.OS === 'android') ? 'white' : '#333333', fontSize: (Platform.OS === 'android') ? 9.5 : 12}}>Boutique</Text>
            </Button>
            <Button vertical active style={{backgroundColor: (Platform.OS === 'android') ? '#d35400' : '#E0E0E0'}}>
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