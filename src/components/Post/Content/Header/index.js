import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';
const Header = ({imageUri, name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={40}/>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Icon name="dots-three-horizontal" size={16}/>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        marginRight: 15
    },
    name: {
        alignSelf:'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    },
});

export default Header