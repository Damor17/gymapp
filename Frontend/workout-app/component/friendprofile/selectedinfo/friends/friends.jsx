import { View, ScrollView, Text, Image} from "react-native";
import styles from "./friendsStyles";


const FriendsView = ({modalInformation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> Friends</Text>
            </View>
            <ScrollView>

                <View style={{marginTop:20, justifyContent:'space-between', backgroundColor:'purple', borderRadius:20, padding:10, }}>
                    {modalInformation.map((friend, index) => (
                        <View key={index} style={styles.friendContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.img}
                                source={{uri:friend.profilePic}}/>
                            </View>
                            <View style={styles.textContainer}>
                                <View style={{borderBottomColor:'purple', borderBottomWidth:2, }}>

                                <Text style={styles.textName}>{friend.username}</Text>
                                </View>
                            </View>
                        </View>

                    ))}

                </View>

            </ScrollView>

        </View>
    )
}

export default FriendsView