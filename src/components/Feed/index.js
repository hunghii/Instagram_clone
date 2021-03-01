import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';
const data = [
    {
        user: {
            imageUri:'https://images.pexels.com/photos/1627936/pexels-photo-1627936.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            name: 'Linh'
        },
        imageUri: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        caption: 'Beautiful City #instagram',
        likesCount: 112,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri:'https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            name: 'Ngoc'
        },
        imageUri: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        caption: 'Beautiful City #instagram',
        likesCount: 1232,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri:'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            name: 'Hien'
        },
        imageUri: 'https://images.pexels.com/photos/6929197/pexels-photo-6929197.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        caption: 'Beautiful City #instagram',
        likesCount: 333,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri:'https://images.pexels.com/photos/1627936/pexels-photo-1627936.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            name: 'Mai'
        },
        imageUri: 'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
        caption: 'Beautiful City #instagram',
        likesCount: 657,
        postedAt: '6 minutes ago'
    }
    
]

const Feed = ({post}) => {
    return(
        <FlatList
            data={data}
            renderItem={({item}) => <Post post={item}/>
            }
            ListHeaderComponent= {Stories}
        />
    )
}



export default Feed