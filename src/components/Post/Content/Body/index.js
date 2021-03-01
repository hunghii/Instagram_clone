import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const Body = ({ImageUri}) => {
    return (
        <Image source={{ uri: ImageUri }} style={styles.image}/>
    )
}
const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }
});

export default Body