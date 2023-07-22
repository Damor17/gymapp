import { Text, View, TouchableOpacity} from "react-native"
import styles from "./tabsStyles"
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = ({user}) => {
    const router = useRouter()
    return (
        <View style ={styles.tabContainer}>
            <View style={styles.bodyContainer}> 
                <View style={styles.twoContainer}>
                <Ionicons name="body" size={35} color="white" />
                <Text style={styles.Text}>
                    Track Progress
                </Text>

                </View>
                <TouchableOpacity
                onPress={() => router.push(`profile/options/body`)}
                >     
                    <AntDesign name="rightcircle" size={40} color="white" />

                </TouchableOpacity>
            </View>
            <View style={styles.goalsContainer}> 
                <View style={styles.twoContainer}>
                <FontAwesome name="font-awesome" size={35} color="white" />
                <Text style={styles.Text}>
                    Goals
                </Text>

                </View>
                <TouchableOpacity onPress={() => router.push(`profile/options/goals`)}
                >     
                    <AntDesign name="rightcircle" size={40} color="white" />

                </TouchableOpacity>
            </View>
            <View style={styles.settingsContainer}> 
                <View style={styles.twoContainer}>
                <MaterialCommunityIcons name="post" size={35} color="white" />
                <Text style={styles.Text}>
                    Posts
                </Text>

                </View>
                <TouchableOpacity onPress={() => router.push(`profile/options/posts`)}
                >     
                    <AntDesign name="rightcircle" size={40} color="white" />

                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Tabs