import { View, Text, Image } from "react-native";
import styles from "./friendinfostyles";
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


const FriendInfo = ({friend}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
                <Image 
                style={styles.img}
                source = {{uri: friend.profilepic}}
                />

            </View>
            <View style={styles.txtcontainer}>
                    <Text style={styles.txtusername}> {friend.username}</Text>
                    <Text style={styles.txtbio}>{friend.biography}</Text>

                    <View style={styles.icons}>
                        <TouchableOpacity>
                            <MaterialIcons name="message" size={25} color="white" />

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="notifications" size={25} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="heart" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                    

                </View>

        </View>
    )
}
export default FriendInfo