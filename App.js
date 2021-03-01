import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Entypo';
import Feat from 'react-native-vector-icons/Feather';
import Heart from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import { Router, Scene } from 'react-native-router-flux'
import Feed from './src/components/Feed';
import Body from './src/components/Post/Content/Body';
import Post from './src/components/Post';
import Stories from './src/components/Stories';
const App = () => {
  return (
    <>
    <Router>
    <Scene
          hideNavBar
          showLabel={false}
          tabs>
          <Scene
              key="product"
              component={HomeScreen}
              hideNavBar
              icon={({ focused }) => (
                <Icon
                  style={{ width: 30 }}
                  name="home"
                  size={30}
                  color={focused ? '#000' : '#353535'}
                />
              )}
            />
            <Scene
              key="shop"
              component={Feed}
              hideNavBar
              icon={({ focused }) => (
                <Feat
                  style={{ width: 30 }}
                  name="search"
                  size={30}
                  color={focused ? '#000' : '#353535'}
                />
              )}
            />
            <Scene
              key="user"
              component={Body}
              hideNavBar
              icon={({ focused }) => (
                <Feat
                  style={{ width: 30 }}
                  name="plus-square"
                  size={30}
                  color={focused ? '#000' : '#353535'}
                />
              )}
            />
            <Scene
              key="users"
              component={Post}
              hideNavBar
              icon={({ focused }) => (
                <Heart
                  style={{ width: 30 }}
                  name="hearto"
                  size={30}
                  color={focused ? '#000' : '#353535'}
                />
              )}
            />
            <Scene
              key="userse"
              component={Stories}
              hideNavBar
              icon={({ focused }) => (
                <User
                  style={{ width: 30 }}
                  name="user-circle-o"
                  size={30}
                  color={focused ? '#000' : '#353535'}
                />
              )}
            />
            </Scene>
    </Router>
      {/* <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
