import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ProfilePicture = ({uri, size = 70}) => {
    return (
        <View style={[styles.container, {width: size + 6, height: size + 6}]}>
            <Image source={{uri:uri}} style={[styles.image, {width: size, height: size}]}/>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#ae22e0',
        borderRadius: 40,
        borderWidth: 3,
        margin: 5

    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#FFF'
    }
})


export default ProfilePicture