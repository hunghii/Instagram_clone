import React from 'react';
import {View, Text} from 'react-native';
import Header from './Content/Header';
import Body from './Content/Body';
import Footer from './Content/Footer';

const Post = ({post}) => {
    return(
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name}/>
            <Body ImageUri={post.imageUri}/>
            <Footer likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt}/>
        </View>
    )
}



export default Post