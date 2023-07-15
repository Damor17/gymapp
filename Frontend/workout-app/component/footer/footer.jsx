import { Text, View, TouchableOpacity, Image} from "react-native"
import styles from "./footerStyles"
import {COLORS, icons, images, SIZES} from '../../constants'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useRouter } from "expo-router";

//MIGHT NEED TO ADD USERID AFTER EACH ROUTE


const Footer = ({user}) => {
    const router = useRouter();
    return (
        <View  style= {styles.container}>
            <TouchableOpacity style={styles.btnContainer}
            onPress={() => router.push(`/addworkout`)}>
                <AntDesign name="pluscircle" color="white" size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}
            onPress={() => router.push(`/`)}>
                <Ionicons name="home" color="white" size={30} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer} 
            onPress={() => router.push(`/profile/${user.id}`)}
            >
                <AntDesign name="user" color="white" size={30} />



            </TouchableOpacity>



        </View>
    )

}

export default Footer