/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Animated, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import { grey } from 'ansi-colors';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Iconss from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/EvilIcons';

import { Container, Content, Header, Left, Right, Center, Card, CardItem,Thumbnail,Body,Button } from 'native-base';
import { Divider, } from 'react-native-elements'





// Created classes for each page seperately


//Page 1
class HomeTab extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" size={25} />
    )



  };
  render() {
    return (

      
      <Container>
        <Content>
        <CardComponent1 />
        <CardComponent2 />
        <CardComponent3 />
        </Content>
      </Container>


    );
  }
}



// Page 2

class SearchTab extends React.Component {
  static navigationOptions = {


    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" size={25} />
    )


  };
  render() {
    return (

      <View><Text>Search</Text></View>



    );
  }
}


//Page 3

class AddMediaTab extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Iconss name="plussquareo" size={25} />
    )


  };
  render() {
    return (
      <Container>
        <Content>
          <CardComponent />
        </Content>
      </Container>

    );
  }
}


//Page 4

class LikesTab extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Iconss name="hearto" size={25} />
    )



  };
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>LikesTab</Text>
      </View>

    );
  }
}


//Page 5

class ProfileTab extends React.Component {
  static navigationOptions = {


    tabBarIcon: ({ tintColor }) => (
      <Iconss name="user" size={25} />
    )


  };
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>ProfileTab</Text>
      </View>

    );
  }
}


//Card component1
class CardComponent1 extends Component {
  render() {
    return (
     <Card>
      <CardItem>
        <Left>
        <Thumbnail source={{
          uri:
            'https://instagram.fblr2-1.fna.fbcdn.net/vp/7df6e20bb64a3d74a8e95849dd77f56f/5D7CA19A/t51.2885-19/s150x150/27892901_437354566697055_8068559561226715136_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        }}/>
            <Body>
              <Text style={{fontSize:15, fontWeight:'bold'}}>thehumourguy</Text>
              <Text note>Delhi,India</Text>
            </Body>
        
        </Left>
      </CardItem>
      <CardItem cardBody>
      <Image style={{height:350,width:null,flex:1,resizeMode:'contain'}} source={require('./src/app/assests/Screenshot_20190521-052143_Instagram.jpg')}/>
      </CardItem>
      <CardItem style={{height:44}}>
       <Left>
        <Button transparent>
        <Iconss name="hearto" size={22} style={{color:'black'}}/>
        </Button>
        <Button transparent>
        <Iconsss name="comment" size={30} style={{color:'black'}}/>
        </Button>

        <Button transparent>
        <Icon name="ios-send" size={30} style={{color:'black'}}/>
        </Button>
       </Left>
      </CardItem>
      <CardItem style={{height:35}}>
        <Text style={{fontWeight:'bold'}}>
        102 likes
        </Text>
      </CardItem>
      
      <CardItem>
      <Body>
      <Text>
      <Text style={{fontWeight:'bold'}}>
      thehumourguy &nbsp;
      </Text>
      Rains, evenings, Coffee, Starbucks
      </Text>
      </Body>
      </CardItem>
     </Card>
    );
  }
}




//Card component2
class CardComponent2 extends Component {
  render() {
    return (
     <Card>
      <CardItem>
        <Left>
        <Thumbnail source={{
          uri:
            'https://instagram.fblr2-1.fna.fbcdn.net/vp/7df6e20bb64a3d74a8e95849dd77f56f/5D7CA19A/t51.2885-19/s150x150/27892901_437354566697055_8068559561226715136_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        }}/>
            <Body>
              <Text style={{fontSize:15, fontWeight:'bold'}}>thehumourguy</Text>
              <Text note>Woodstock,VIT</Text>
            </Body>
        
        </Left>
      </CardItem>
      <CardItem cardBody>
      <Image style={{height:350,width:null,flex:1,resizeMode:'contain'}} source={require('./src/app/assests/Screenshot_20190521-050327_Instagram.jpg')}/>
      </CardItem>
      <CardItem style={{height:44}}>
       <Left>
        <Button transparent>
        <Iconss name="hearto" size={22} style={{color:'black'}}/>
        </Button>
        <Button transparent>
        <Iconsss name="comment" size={30} style={{color:'black'}}/>
        </Button>

        <Button transparent>
        <Icon name="ios-send" size={30} style={{color:'black'}}/>
        </Button>
       </Left>
      </CardItem>
      <CardItem style={{height:35}}>
        <Text style={{fontWeight:'bold'}}>
        102 likes
        </Text>
      </CardItem>
      
      <CardItem>
      <Body>
      <Text>
      <Text style={{fontWeight:'bold'}}>
      thehumourguy &nbsp;
      </Text>
      College Fests are fun but then, who cares
      </Text>
      </Body>
      </CardItem>
     </Card>
    );
  }
}




//Card component3
class CardComponent3 extends Component {
  render() {
    return (
     <Card>
      <CardItem>
        <Left>
        <Thumbnail source={{
          uri:
            'https://instagram.fblr2-1.fna.fbcdn.net/vp/7df6e20bb64a3d74a8e95849dd77f56f/5D7CA19A/t51.2885-19/s150x150/27892901_437354566697055_8068559561226715136_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        }}/>
            <Body>
              <Text style={{fontSize:15, fontWeight:'bold'}}>thehumourguy</Text>
              <Text note>Rock Beach, Pondicherry</Text>
            </Body>
        
        </Left>
      </CardItem>
      <CardItem cardBody>
      <Image style={{height:350,width:null,flex:1,}} source={require('./src/app/assests/Screenshot_20190521-051906_Instagram.jpg')}/>
      </CardItem>
      <CardItem style={{height:44}}>
       <Left>
        <Button transparent>
        <Iconss name="hearto" size={22} style={{color:'black'}}/>
        </Button>
        <Button transparent>
        <Iconsss name="comment" size={30} style={{color:'black'}}/>
        </Button>

        <Button transparent>
        <Icon name="ios-send" size={30} style={{color:'black'}}/>
        </Button>
       </Left>
      </CardItem>
      <CardItem style={{height:35}}>
        <Text style={{fontWeight:'bold'}}>
        102 likes
        </Text>
      </CardItem>
      
      <CardItem>
      <Body>
      <Text>
      <Text style={{fontWeight:'bold'}}>
      thehumourguy &nbsp;
      </Text>
      Captured capturing the moment
      </Text>
      </Body>
      </CardItem>
     </Card>
    );
  }
}









const DashboardTabNavigator = createBottomTabNavigator({
  HomeTab: HomeTab,
  SearchTab: SearchTab,
  AddMediaTab: AddMediaTab,
  LikesTab: LikesTab,
  ProfileTab: ProfileTab,
},
  {

    style: {
      ...Platform.select({
        android: { backgroundColor: 'blue' }
      })
    },
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true,
    }
  }
);

const AppStackNavigator = createStackNavigator({

  DashboardTabNavigator: DashboardTabNavigator



  


}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft:
          <Icons name="camera" size={25} style={{ paddingLeft: 10 }} />,
        headerTitle: <Image
          style={{
            width: 100,
            height: 51,
            resizeMode: 'contain',
          }}
          source={{
            uri:
              'https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png',
          }}
        />,
        headerRight: <Icon name="ios-send" size={30} style={{ paddingRight: 10 }} />,
      };
    }
  }

);



export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});