import React, { Profiler } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feat from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Heart from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import { Router, Scene } from 'react-native-router-flux'
import HomeScreen from './src/screens/HomeScreen';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <>
    <Router>
    <Scene
          showLabel={false}
          tabs>
          <Scene
              key="Home"
              component={HomeScreen}
              renderTitle={({props}) =>
              <View style={{flexDirection:'row', justifyContent: 'space-between', width:"100%",padding: 5}}>
                <Image source={require('./images/logo.png')} style={{height: 38, width:'36%'}}/>
                <Icon name="facebook-messenger" size={30}/>
              </View> }
              icon={({ focused }) => (
                <Icon
                  style={{ width: 30 }}
                  name={focused ? "home" : "home-outline"}
                  size={30}
                />
              )}
            />
            <Scene
              key="Discovery"
              component={DiscoveryScreen}
              hideNavBar
              icon={({ focused }) => (
                <Feat
                  style={{ width: 30 }}
                  name={focused ? "search" : "search-outline"}
                  size={30}
                />
              )}
            />
            <Scene
              key="Post"
              component={CreatePostScreen}
              hideNavBar
              icon={({ focused }) => (
                <Entypo
                  style={{ width: 30 }}
                  name="squared-plus"
                  size={30}
                  color={focused ? '#000' : '#353535'}
                />
              )}
            />
            <Scene
              key="Notifications"
              component={NotificationsScreen}
              hideNavBar
              icon={({ focused }) => (
                <Heart
                  style={{ width: 30 }}
                  name="hearto"
                  name={focused ? "heart" : "hearto"}
                  size={30}
                />
              )}
            />
            <Scene
              key="Profile"
              component={ProfileScreen}
              hideNavBar
              icon={({ focused }) => (
                <User
                  style={{ width: 30 }}
                  name={focused ? "user-circle" : "user-circle-o"}
                  size={30}
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
