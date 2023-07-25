import { SafeAreaView, ScrollView} from "react-native";
import { Stack, useRouter } from "expo-router";
import {COLORS} from '../../constants'

import { useSearchParams } from "expo-router";
import ProfileBack from "../../component/buttons/profileback";
import { useState } from "react";
import Tabs from "../../component/profile/tabs/tabs";
import Footer from "../../component/footer/footer";
import LiftCard from "../../component/profile/BasicInfo/cardinfo";
import SelectInfo from "../../component/friendprofile/selectedinfo/selectedInfo";




const Profile = () => {
    const params = useSearchParams();
    const router = useRouter();
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

    
    const [modal, setModal] = useState(false)
    const [modalInfo, setModalInfo] = useState('Friends')



    return (
        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}

    }>
            <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: 'black'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ProfileBack
                        place = {'/'}
                        

                        />
                    ),
                    headerTitle: ""
                }}
            />
            <SelectInfo
            color={COLORS.primary}
            friend={user} modalInfo={modalInfo} modal={modal} setModal={setModal}
             />

            <ScrollView 
            showsVerticalScrollIndicator={false}>
                 <LiftCard style={{flex:1, }} 
                 modalInfo={modalInfo} setModalInfo={setModalInfo} modal={modal} setModal={setModal}
                 user={user}/>
                <Tabs user={user}/>
            </ScrollView>
            
            <Footer user={user}/>

        </SafeAreaView>
    )
}

export default Profile