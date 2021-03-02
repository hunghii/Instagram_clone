import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';
import Feed from '../../components/Feed';


   

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Feed/>
        </SafeAreaView>
    )
}

export default HomeScreen;
