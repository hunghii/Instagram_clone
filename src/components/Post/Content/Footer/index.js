import React, {useState} from 'react';
import {Text, View, Image, StyleSheet,TouchableWithoutFeedback,Alert} from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';
import Comicon from 'react-native-vector-icons/Fontisto';
import Share from 'react-native-vector-icons/Feather';
import Bookmark from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount,caption,postedAt}) => {
    const [isLike, setIsLike] = useState(false);
    const [count, setCount] = useState(likesCount);
    const [mark,setMark]  = useState(false)
    const onLike = () => {
        
        setIsLike(!isLike);
        const value = isLike? 0 : + 1
        setCount(likesCount + value);
    };
    const onMark = () => {
        mark?
        Alert.alert(
            "Hủy dấu trang",
          ): Alert.alert(
            "Gắn dấu trang",
          )
        setMark(!mark)
    }
    
    return (
        <View style={styles.container}>
            <View style = {styles.Iconcontainer}>
                <View style={styles.iconLeft}>
                    <TouchableWithoutFeedback onPress={onLike}>
                        {isLike ? 
                            <Icon name="heart" size={25} color={"#c30000"}/>:
                            <Icon name="hearto" size={25} color={"#545454"}/>
                        }
                    </TouchableWithoutFeedback>
                    <Comicon name="comment" size={23} color={"#545454"}/>
                    <Share name="send" size={25} color={"#545454"}/>
                </View>
                <View style={styles.iconRight}>
                    <TouchableWithoutFeedback onPress={onMark}>
                        {mark ? 
                            <Bookmark name="bookmark" size={25} color={"#000"}/>:
                            <Bookmark name="bookmark-o" size={25} color={"#545454"}/>
                        }
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <Text style={styles.likes}>{count} lượt thích</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    Iconcontainer: {
        flexDirection:'row', 
        justifyContent:'space-between',
        padding: 5
    },
    iconLeft: {
        flexDirection:'row', 
        width: 100,
        justifyContent:'space-between'
    },
    iconRight: {

    },
    likes: {
        fontWeight: 'bold',
        margin: 3
    },
    caption: {
        margin: 3
    },
    postedAt: {
        color: '#8c8c8c',
        margin: 3
    }
});

export default Footer