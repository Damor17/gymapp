import { View, ScrollView, SafeAreaView, Text, Modal, TouchableOpacity} from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import {COLORS, icons, images, SIZES} from '../constants'
import Welcome from "../component/homepage/welcome/welcome";
import Feed from "../component/homepage/feed/feed";
import Footer from "../component/footer/footer";
import SettingsButton from "../component/buttons/settingsButton";
import { AntDesign } from '@expo/vector-icons';
import Cookies from "universal-cookie";
import Auth from "../component/auth/auth";
import { StreamChat } from "stream-chat";
import RootTabs from "../component/miscellaneous/rootTabs/rootTabs";

const apiKey = 'qq6rvrmw9x3m'
const cookies = new Cookies()

const authToken = false;
const client = StreamChat.getInstance(apiKey)


// if(authToken) {
//     client.connectUser({
//         id: cookies.get('userId'),
//         name: cookies.get('username'),
//         fullName: cookies.get('fullName'),
//         hashedPassword: cookies.get('hashedPassword'),
//         phoneNumber: cookies.get('phoneNumber'),
//     }, authToken)
// }



const Home = () => {
    const router = useRouter()
    const user ={
        id:3, 
        username: 'Damor 200',
        profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
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
        biography: "Hello, I want to become the very best that no one everwas           carpdeim",
        logs: [
            {
                excersise: 'Bench Press',
                SetNReps: [
                    {
                        sets: 8,
                        reps:8,
                        weight: 155

                    },

                ],
                date: 'July 4th'
            },
            {
                excersise: 'Bench Press',
                SetNReps: [
                    {
                        sets: 8,
                        reps:8,
                        weight: 155

                    },

                ],
                date: 'July 10th'
            },
        ],
        friends: [
            {
                id:1,
                username:'El Baby',
                profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
            },
            {
                id:2,
                username:'El MR',
                profilepic:  "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f",
            },

        ],
        achievements: [
            {
                excersise: 'Bench Press',
                PR: 255,
                date: 'July 15th',
            },
            {
                excersise: 'Bench Press',
                PR: 210,
                date: 'July 10th',
            }
        ]
    }

    const [modalVisible, setModalVisible] = useState(false);
    
    const handleModal = () => {
        setModalVisible(!modalVisible);
    };

    const Logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');
    
        window.location.reload();
    
    }

    const handlePressRoutes = (place) => {
        router.push(`/${place}`)
        setModalVisible(!modalVisible)
    }


    if (!authToken) return <Auth />


    
    return (
        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}
        }>
            <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: 'black'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        < SettingsButton
                        handleModal={handleModal}
                        modalVisible ={modalVisible}
                        name = "menu" 
                        />
                    ),
                    headerRight: () => (
                        <RootTabs user={user} />
                    ),
                    headerTitle: ""
                }}
                />

            <Modal visible={modalVisible}        
            transparent
            animationIn="slideInLeft"
            style={{ justifyContent: 'center',
            alignItems: 'center',}}
            >
                <View style={{ backgroundColor: 'black', borderRadius:30, padding: 30,width: '50%',}}>
                    <View style={{position:'relative',
                    justifyContent:'flex-end',
                    alignItems:'flex-start', marginBottom:20, marginTop:30, }}>
                        <TouchableOpacity onPress={handleModal} style={{position:'relative',top:0, right:0, }}>
                        <AntDesign name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }} onPress={()=> handlePressRoutes('/')}>
                            <Text style={{color:'white', fontSize:18,  }}> Home</Text>
                        </TouchableOpacity>    
                        <TouchableOpacity style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }} onPress={()=> handlePressRoutes(`/profile/${user.id}`)}>
                            <Text style={{color:'white', fontSize:18,  }}> Profile</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }} onPress={()=> handlePressRoutes(`/profile/options/posts`)}>
                            <Text style={{color:'white', fontSize:18,  }}> Posts</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={()=>Logout()} style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }}>
                            <Text style={{color:'white', fontSize:18,  }}> Logout</Text>
                        </TouchableOpacity>   

                    </View>



                </View>
            </Modal>


            <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
            >
                <View style = {{flex:1, padding: SIZES.medium}}>
                    <Welcome user={user}/>

                </View>
                <Feed/>
            </ScrollView>
            <Footer
            user ={user}
            />

            
        </SafeAreaView>
    )
}

export default Home