import { View, Text, SafeAreaView, ScrollView, ActivityIndicator} from "react-native";
import { useSearchParams } from "expo-router";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import ProfileBack from "../../component/buttons/profileback";
import FriendInfo from "../../component/friendprofile/friendinfo/friendinfo";
import FriendFeed from "../../component/friendprofile/friendfeed/friendfeed";
import { useEffect } from "react";
import GoBack from "../../component/buttons/goBackButton";



//UPLOAD FRIEND data here and then filter by using params, most likely


const FriendProfile = () => {
    const {isLoading, setisLoading} = useState(false)
    const {id} = useSearchParams();
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
    
    const friend = data.find(friend => (friend.id).toString() === id)

    if (!friend) {
        return <ActivityIndicator />
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
            <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: 'black', color:'white', marginBottom:-10, },
                    headerShadowVisible: false,
                    headerLeft: () => (
                       <GoBack />
                    ),
                    headerTitle: ''
                    
                }}
             />
            <FriendInfo friend={friend}/>
            <FriendFeed friend={friend}/>
            

        </SafeAreaView>
    )


}

export default FriendProfile