import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProfilePicture from '../ProfilePicture';

const Story = ({imageUri, name }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
   
    },
    text: {
        textAlign:'center'
    }
})
export default Story