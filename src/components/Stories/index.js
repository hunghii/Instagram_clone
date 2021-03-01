import React from 'react';
import {Text, View, FlatList,StyleSheet} from 'react-native';
import Story from '../Story';



const data = [
    {
        imageUri:'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'Hien'
    },
    {
        imageUri:'https://images.pexels.com/photos/1627936/pexels-photo-1627936.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'Linh'
    },
    {
        imageUri:'https://images.pexels.com/photos/3778361/pexels-photo-3778361.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'Mai'
    },
    {
        imageUri:'https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'Ngoc'
    },
    {
        imageUri:'https://images.pexels.com/photos/4974345/pexels-photo-4974345.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'Lulu'
    },
    {
        imageUri:'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'En.comics'
    },
    {
        imageUri:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'Linh'
    },
    {
        imageUri:'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        name: 'Thanh'
    },
    
]


const Stories = () => {
    return(
        <FlatList 
        data={data}
        renderItem={({item}) =><Story imageUri={item.imageUri} name = {item.name}/>}
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({name}) =>name}
    />
    )
    
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    }
});

export default Stories