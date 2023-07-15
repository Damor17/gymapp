import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./profilePicStyles";
const ProfilePic = ({user}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.imgcontainer}>
                    < Image style ={styles.img}
                    source={{uri:user.profilepic}}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.headerText}>
                        Edit Picture 
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfilePic