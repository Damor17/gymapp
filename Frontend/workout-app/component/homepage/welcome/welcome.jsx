import { Text, View, TextInput, FlatList, TouchableOpacity, Image} from "react-native"
import styles from "./welcomestyles"
import { SIZES, COLORS, images} from "../../../constants"
import { useState } from "react"
import FriendActiveCard from "../../cards/FriendActive/friendActiveCard"

const Welcome = ({user}) => {
    const [data, setData] =  useState([
        {
            id: 1,
            username: 'Mr.Beans',
            active: false, 
            image: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f"
        },
        {
            id: 2,
            username: 'SHinyMan',
            active: true, 
            image: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg'
        },
        {
            id: 3,
            username: 'Thebesterlolste',
            active: false, 
            image: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f"
        },
        



    ])


    return (
        <View>
            <View style= {styles.container}>
                <Text style = {styles.userName}> Hello {user.username} </Text>
                <Text style = {styles.welcomeMessage}> Place Time Here</Text>
            </View>
            <View>
                <FlatList 
                    data = {data}
                    renderItem={({item}) => (
                        <FriendActiveCard 
                            item = {item}
                        />

                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    
                />
            </View>
        </View>

    )
}

export default Welcome