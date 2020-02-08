import React, { Component } from 'react';
import { Container, Header, Content, CheckBox, List, Card, ListItem, CardItem, Text, Body, Form, Item, Label, Input, Title, Left, Right, Icon, Button, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';


export default class RegisterScreen extends Component {
    render() {
        return (
            <Container>
                <Content style={{marginTop: '10%'}}>
                  <Content style={{textAlign:'center'}}>
                      <View style={{justifyContent: 'center',
                          alignItems: 'center'}}>
                      <Image
                      style={{width: 100, height: 100}}
                      source={{uri: 'https://yt3.ggpht.com/a/AGF-l7_5ps4dna7q9vvuqc9m8Gky8W7Mqwr0JDQ-zA=s288-c-k-c0xffffffff-no-rj-mo'}}
                      />
                      </View>
                      
                  </Content>
                  <Content style={styles.loginContent}>
                      <Text style={styles.welcome}>Créer un compte</Text>
                      <Item style={styles.email}>
                        <Input placeholder='Prénom'/>
                        <Icon active name='ios-person' />
                      </Item>
                      <Item style={styles.email}>
                        <Input placeholder='Nom'/>
                        <Icon active name='ios-person' />
                      </Item>
                      <Item style={styles.email}>
                        <Input placeholder='Adresse e-mail'/>
                        <Icon active name='ios-mail' />
                      </Item>
                      <Item style={styles.email}>
                        <Input secureTextEntry={true} placeholder='Mot de passe'/>
                        <Icon active name='ios-lock' />
                      </Item>
                      <Button block style={styles.loginButton}>
                      <Text>S'inscrire</Text>
                      </Button>
                      <Text  onPress={() => this.props.navigation.navigate('Login')}  style={{textAlign: "center", marginTop: 10,color: '#2980b9'}}>J'ai déjà un compte</Text>
                  </Content>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
      color: 'black',
      fontWeight: "800",
      fontSize: 30,
    },
    loginContent: {
      marginTop: '10%',
      marginLeft: 30,
      marginRight: 30
    },
    email: {
      marginTop: '5%',
      marginBottom: '5%'
    },
    emailInput: {
      backgroundColor: '#F3F3F3',
    },
    loginButton: {
      marginTop: 30,
      backgroundColor: '#F76700'
    }
  });