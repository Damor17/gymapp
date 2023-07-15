import { Text, TouchableOpacity, SafeAreaView, ScrollView} from "react-native"
import { Stack, useRouter } from "expo-router";
import ProfileBack from "../../../component/buttons/profileback";
import {COLORS} from '../../../constants'
import InfoGoals from "../../../component/goals/infogoals/infogoals";

import MonthlyGoals from "../../../component/goals/timegoals/monthlygoals/y/monthlygoals";
import WeeklyGoals from "../../../component/goals/timegoals/weeklygoals/weeklygoals";

const Goals = ( ) => {
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
        biography: "Hello, I want to become the very best that no one everwas           carpdeim"
    }

    return (
        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}

    }>
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
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
                <InfoGoals/>
                <WeeklyGoals/>
                <MonthlyGoals />

            </ScrollView>


        </SafeAreaView>
    )
}
export default Goals