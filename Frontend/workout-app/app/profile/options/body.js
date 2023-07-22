import { Text, TouchableOpacity, View, ScrollView, SafeAreaView} from "react-native"
import { Stack } from "expo-router"
import ProfileBack from "../../../component/buttons/profileback"
import { LinearGradient } from "expo-linear-gradient"
import BodyStats from "../../../component/body/bodystats/bodystats"
import {COLORS} from '../../../constants'
import BodyInfo from "../../../component/body/bodyinfo/bodyInfo"

const BodyMe = ( ) => {

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
                        sets: 1,
                        reps:1,
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
            {
                excersise: 'Bench Press',
                SetNReps: [
                    {
                        sets: 1,
                        reps:1,
                        weight: 255

                    },

                ],
                date: 'July20th'
            },
        ],
        healthlogs: [
            {
                height: '51',
                weight: '155',
                bpm: '135',
                date: 'June 4th'
            },
            {
                height: '51',
                weight: '185',
                bpm: '135',
                date: 'June 20th'
            },
            {
                height: '52',
                weight: '160',
                bpm: '135',
                date: 'June 30th'
            },

        ]

    }

    return (
        


        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}}>
            <LinearGradient
            style={{flex:1}}
            colors={[COLORS.primary, '#000000' ]}
            start={{x:0, y:0}}
            end={{x:1, y:1}}
                >
            
                <Stack.Screen
                    options = {{
                        headerStyle : {backgroundColor: 'black'},
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <ProfileBack
                            place = {`/profile/${user.id}`}

                            />
                        ),
                        headerTitle: ""
                    }}
                />

                <ScrollView >
                
                    <BodyStats /> 
                    
                    <BodyInfo  user={user}/>
                
                </ScrollView>
                </LinearGradient>
        </SafeAreaView>
        

    )
}
export default BodyMe