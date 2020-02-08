import React, { Component } from 'react';
import { View } from 'react-native';
import { Root } from "native-base";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { StatusBar } from 'react-native';

import LoginScreen from './pages/LoginForm';
import RegisterScreen from './pages/RegisterForm';
import ForgotPasswordScreeen from './pages/ForgotPassword';
import HomeScreen from './pages/Home';
import WinScreen from './pages/WinTab';
import GamesScreen from './pages/GamesTab';
import ShopScreen from './pages/ShopTab';
import ProfilScreen from './pages/ProfilTab';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Se connecter',
        header: null //this will hide the header
      },
    },
    ForgotPsw: ForgotPasswordScreeen,
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Inscription',
        header: null //this will hide the header
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Accueil',
        header: null //this will hide the header
      },
    },
    Win: {
      screen: WinScreen,
      navigationOptions: {
        title: 'Gagner',
        header: null //this will hide the header
      },
    },
    Games: {
      screen: GamesScreen,
      navigationOptions: {
        title: 'Jouer',
        header: null //this will hide the header
      },
    },
    Shop: {
      screen: ShopScreen,
      navigationOptions: {
        title: 'Boutique',
        header: null //this will hide the header
      },
    },
    Profil: {
      screen: ProfilScreen,
      navigationOptions: {
        title: 'Profil',
        header: null //this will hide the header
      },
    },
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,  // Set the animation duration time as 0 !!
      },
    }),
    navigationOptions: {
      headerVisible: false,
      gesturesEnabled: false
    },
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);