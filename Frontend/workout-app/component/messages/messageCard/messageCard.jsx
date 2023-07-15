import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./messageCardStyles";

const MessageCard =({item}) => {


    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <TouchableOpacity style={styles.imgContainer}>
                        <Image style={styles.img}
                        source={{uri: item.profilepic}}
                        />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.usernameText}>
                        {item.username}
                    </Text>
                    <Text style={styles.messageText}>
                        {(item.lastmessage).length <= 30 ? item.lastmessage 
                        : `${(item.lastmessage).slice(0,31)}...`}
                    </Text>

                </View>

            </View>
            




        </View>
    )
}

export default MessageCard