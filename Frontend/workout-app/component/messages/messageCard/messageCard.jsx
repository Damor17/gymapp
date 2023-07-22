import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./messageCardStyles";

const MessageCard =({item}) => {


    return (
        <TouchableOpacity style={styles.container}>
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

            <View style={styles.rigthSide}>
                {!item.read ? (
                    <View style={styles.numberContainer}>
                    <Text style={styles.number}>
                        4
                    </Text>

                </View>


                ): (
                    <View>
                      
                    </View>
                )}
    
                <Text style={styles.date}>
                    250
                </Text>

            </View>
            




        </TouchableOpacity>
    )
}

export default MessageCard