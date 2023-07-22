import { View, Text, TextInput, FlatList} from "react-native";
import styles from "./messagesLayoutStyles";
import { useState } from "react";
import MessageCard from "../messageCard/messageCard";
import { useEffect } from "react";
import FriendActiveCard from "../../cards/FriendActive/friendActiveCard";
import HorizontalCard from "../horizontalCard/horizontalCard";


const MessagesLayout = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([
        {
            username: 'MrDabloons',
            profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
            lastmessage: 'You Look good',
            read: false,
        },
        {
            username: 'Mns',
            profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
            lastmessage: 'Motherfucker you stole my weed',
            read: true,
        },
        {
            username: 'Bigzassy',
            profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
            lastmessage: 'You Look good',
            read: false,
        },
        



    ])
    const [searchResults, setSearchResults] = useState(data)

    useEffect(() => {
        const filteredResults = data.filter(item => ((item.username).toLowerCase()).includes(search.toLowerCase()) || ((item.lastmessage).toLowerCase()).includes(search.toLowerCase()))
    
        setSearchResults(filteredResults)

      }, [data, search])

    if (!searchResults) return <ActivityIndicator></ActivityIndicator>


    return (
        <View>
            <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                    value= {search}
                    onChangeText={(text) => setSearch(text)}
                    placeholder="Search here..."
                    placeholderTextColor={'white'}/>
        </View>
                


            <View style={styles.horizontalContainer}>
                <FlatList 
                        data = {data}
                        renderItem={({item}) => (
                            <HorizontalCard 
                                item = {item}
                            />

                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}     
                />
            </View>



            <View style={styles.flatListContainer}>
                <FlatList 
                    data = {searchResults}
                    showsVerticalScrollIndicator ={false}
                    renderItem={({item}) => (
                        <MessageCard
                            item = {item}
                            keyExtractor={(item) => item.username}
                        />

                    )} />
            </View>


        </View>
    )
}

export default MessagesLayout 