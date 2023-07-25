import { View, ScrollView, Text, Image} from "react-native";
import styles from "./friendsStyles";


const FriendsView = ({color, modalInformation}) => {
    return (
        <View style={styles.container}>
            <View style={{ padding:4, alignItems:'center',borderBottomColor:color,borderBottomWidth:2, }}>
                <Text style={styles.headerText}> Friends</Text>
            </View>
            <ScrollView>

                <View style={{marginTop:20, justifyContent:'space-between', backgroundColor:color, borderRadius:20, padding:10, }}>
                    {modalInformation.map((friend, index) => (
                        <View key={index} style={styles.friendContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.img}
                                source={{uri:friend.profilepic}}/>
                            </View>
                            <View style={styles.textContainer}>
                                <View style={{borderBottomColor:color, borderBottomWidth:2, }}>

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