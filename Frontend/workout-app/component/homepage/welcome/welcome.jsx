import { Text, View, FlatList,} from "react-native"
import styles from "./welcomestyles"

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

    const sayings = [
    "Never Gon Give You Up...",
    "Yo, What's that noise?",
    "I Have A Dream...",
    'Yo, When Ya Going to PR?',
    'Just Before Sunrise There Is A Dark Night',
    'Go All In!! Or...']

 
    const getRandomNumberInRange = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    

    const randomNumber = getRandomNumberInRange(0, sayings.length);



    const saying = sayings[randomNumber]

    return (
        <View>
            <View style= {styles.container}>
                <Text style = {styles.userName}> Hello {user.username} </Text>
                <Text style = {styles.welcomeMessage}> {saying}</Text>
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