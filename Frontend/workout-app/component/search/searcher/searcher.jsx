import { View, TextInput, FlatList, Text} from "react-native";
import styles from "./searcherStyles";
import { useState } from "react";
import SearchCard from "../searchCard/searchChard";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { ActivityIndicator } from "react-native";
const screenHeight= Dimensions.get('window').height



const Searcher = () => {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState(data)
    const [data, setData] =  useState([
        {
            id: 1,
            username: 'Mr.Beans',
            active: false, 
            biography: 'fasdjfaksjfklajslfkj;asfdk;sf;a',
            posts: [{
                username: "El Chingon1202",
                profilePic: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f",
                image: 'https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0',
                caption: 'I went to the mountains Todday',
                description: "blah blahblah blafhjasdhfkjsafsahjasghkjasfhsjkdfjkhasjfsafhfhjaskjfhsjkfhsjkhfjksahkjasfjsahfkahfajshdfjafhjasdfhsadhfjlasshhsalfsafhsfhjlahljasdfljssjh",
                comments : [
                    {
                        comment: 'That was so sick',
                        user: 'Nasmester'
                    },
                    {
                        comment: 'Kys',
                        user: 'Nr'
                    },
                    {
                        comment: 'Diester',
                        user: 'LolMaster'
                    },
                ]
            },
            {
                username: "El Chingon1202",
                profilePic: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f",
                image: 'https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0',
                caption: 'I went to the mountains Todday',
                description: "blah blahblah blafhjasdhfkjsafsahjasghkjasfhsjkdfjkhasjfsafhfhjaskjfhsjkfhsjkhfjksahkjasfjsahfkahfajshdfjafhjasdfhsadhfjlasshhsalfsafhsfhjlahljasdfljssjh",
                comments : [
                    {
                        comment: 'That was so sick',
                        user: 'Nasmester'
                    },
                    {
                        comment: 'Kys',
                        user: 'Nr'
                    },
                    {
                        comment: 'Diester',
                        user: 'LolMaster'
                    },
                ]
    
    
            },
    
            ],
            profilepic: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f"
        },
        {
            id: 2,
            username: 'SHinyMan',
            active: true, 
            biography: 'fasdjfaksjfklajslfkj;asfdk;sf;asfjsfskafjasfljhasjkfhasjklfhjkasfjhasjfhasdfhjkasdfjkhaslkjfhalsjkfhjkalsfjkaslfjasjasjfasljhfljasdhfjahfjahfjashlfjafjsalfjhsj',
            posts: [{
                username: "El Chingon1202",
                profilePic: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f",
                image: 'https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0',
                caption: 'I went to the mountains Todday',
                description: "blah blahblah blafhjasdhfkjsafsahjasghkjasfhsjkdfjkhasjfsafhfhjaskjfhsjkfhsjkhfjksahkjasfjsahfkahfajshdfjafhjasdfhsadhfjlasshhsalfsafhsfhjlahljasdfljssjh",
                comments : [
                    {
                        comment: 'That was so sick',
                        user: 'Nasmester'
                    },
                    {
                        comment: 'Kys',
                        user: 'Nr'
                    },
                    {
                        comment: 'Diester',
                        user: 'LolMaster'
                    },
                ]
            },
            {
                username: "El Chingon1202",
                profilePic: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f",
                image: 'https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0',
                caption: 'I went to the mountains Todday',
                description: "blah blahblah blafhjasdhfkjsafsahjasghkjasfhsjkdfjkhasjfsafhfhjaskjfhsjkfhsjkhfjksahkjasfjsahfkahfajshdfjafhjasdfhsadhfjlasshhsalfsafhsfhjlahljasdfljssjh",
                comments : [
                    {
                        comment: 'That was so sick',
                        user: 'Nasmester'
                    },
                    {
                        comment: 'Kys',
                        user: 'Nr'
                    },
                    {
                        comment: 'Diester',
                        user: 'LolMaster'
                    },
                ]
    
    
            },
    
            ],
            profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg'
        },
        {
            id: 3,
            username: 'Thebesterlolste',
            active: false, 
            biography: 'fasdjfaksjfklajslfkj;asfdk;sf;a',
            posts: [],
            profilepic: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f"
        },
        
        
        

    ])


    useEffect(() => {
        const filteredResults = data.filter(item => ((item.username).toLowerCase()).includes(search.toLowerCase()))
    
        setSearchResults(filteredResults)
        console.log(searchResults)
    
      }, [data, search])

    if (!searchResults) return <ActivityIndicator></ActivityIndicator>


    return (
        <>
            <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                    value= {search}
                    onChangeText={(text) => setSearch(text)}
                    placeholder="Search here..."
                    placeholderTextColor={'white'}/>
            </View>
            <View style={styles.container}>
            
                {searchResults.length === 0 ? (
                    <View style={styles.noUsers}>
                        <View style={styles.noUsersTextContainer}>

                            <Text style={styles.noUsersText}>No Users Found</Text>
                        </View>
                    </View>

                ): (
                    <View style={styles.list}>
                        <FlatList 
                        data = {searchResults}
                        renderItem={({item}) => (
                            <SearchCard
                                item = {item}
                                keyExtractor={(item) => item.username}
                            />

                        )} />
                    </View>

                )}

    

            </View>
        
        </>
    )

}

export default Searcher