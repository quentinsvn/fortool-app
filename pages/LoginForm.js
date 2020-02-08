import React, { Component } from 'react';
import { Container, Content, Text, Item, Input, Icon, Button, View } from 'native-base';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import KeyboardShift from '../modules/KeyboardShift';

export default class LoginScreen extends Component {
    render() {
        return (
            <Container>
              <KeyboardShift>
              {() => (
                <Content style={{marginTop: '15%'}}>
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
                        <Text style={styles.welcome}>Bienvenue !</Text>
                        <Item style={styles.email}>
                        <Input placeholder='Adresse e-mail'/>
                        <Icon active name='ios-person' />
                        </Item>
                        <Text onPress={() => this.props.navigation.navigate('ForgotPsw')}  style={{textAlign: 'right', color: '#2980b9'}}>Mot de passe oublié ?</Text>
                        <Item>
                        <Input secureTextEntry={true} placeholder='Mot de passe'/>
                        <Icon active name='ios-lock' />
                        </Item>
                        <Button onPress={() => this.props.navigation.navigate('Home')} block style={styles.loginButton}>
                        <Text>Se connecter</Text>
                        </Button>
                        <Text onPress={() => this.props.navigation.navigate('Register')} style={{textAlign: "center", marginTop: 10,color: '#2980b9'}}>Je n'ai pas encore de compte</Text>
                    </Content>
                </Content>
                )}
                </KeyboardShift>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
      color: 'black',
      fontWeight: "800",
      fontSize: 45,
    },
    loginContent: {
      marginTop: '10%',
      marginLeft: 30,
      marginRight: 30
    },
    email: {
      marginTop: '10%',
      marginBottom: '10%'
    },
    emailInput: {
      backgroundColor: '#F3F3F3',
    },
    loginButton: {
      marginTop: 60,
      backgroundColor: '#F76700'
    },
  });
  