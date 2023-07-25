import { Text, Image , View,} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useRouter } from "expo-router"


import styles from "./friendActivestyles"



const FriendActiveCard = ({item}) => {

    const router = useRouter()

    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.logo} onPress={() => router.push(`/users/${item.id}`)}>
                { item.image ? (
                    <Image  style={{width: '100%',height: '100%', resizeMode: 'cover'}}source ={{uri: item.profilepic}}
                    resizeMode='contain'/>

                ): (
                    <Image  style={{width: '100%',height: '100%', resizeMode: 'cover'}}source ={{uri: item.profilepic}}
                    resizeMode='contain'/>

                )
                    
                }
            </TouchableOpacity>
            <Text style={styles.textcolor}>{item.username}</Text>

        </View>
    
    )
}

export default FriendActiveCard