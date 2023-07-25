import { View, Image, Text, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./searchCardStyles";
import {COLORS} from '../../../constants'
import { FontAwesome } from '@expo/vector-icons'; 

const SearchCard = ({friends, setFriends,user, item}) => {
    const router = useRouter()
    const [hasFriend, setHasFriend] = useState(false)

    useEffect(() => {
        const hasFriend = friends.some((friend) => friend.id === item.id);
        setHasFriend(hasFriend);
        console.log(friends)
      }, [item.id, friends]);


      const handleAdd = (item) => {
        setFriends((friends) => [...friends, item])
        console.log(friends)

      }

      const handleRemove = (item) => {
        const updatedFriends = friends.filter((friend) => friend.id !== item.id);
        setFriends(updatedFriends);

      }




    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftSide} onPress={() => router.push(`/users/${item.id}`)}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                    source={{uri:item.profilepic}}
                    />
                </View>
                <Text style={styles.textProfile}>
                        {item.username}
                </Text>
            </TouchableOpacity>
            <View style={styles.rightSide}>
                {
                    hasFriend ? (
                        <>
                            <TouchableOpacity onPress={() => handleRemove(item)}>
                            <FontAwesome name="user" size={26} color={COLORS.primary} />
                            </TouchableOpacity>
                           
                            <TouchableOpacity >
                                <AntDesign name="message1" size={24} color='white' />
                            </TouchableOpacity>
                        </>

                    ): (
                        <>
                            <TouchableOpacity onPress={() => handleAdd(item)}>
                                <AntDesign name="adduser" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <AntDesign name="message1" size={24} color="white" />
                            </TouchableOpacity>

                        </>

                    )
                }


            </View>

        </View>

    )
}

export default SearchCard