import { View, Text, TouchableOpacity} from "react-native";
import ScreenHeaderBtn from "../../buttons/screenHeaderBtn";
import styles from "./rootTabsStyles";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { useRouter } from "expo-router"; 



const RootTabs = ({user}) => {
    const router = useRouter()


    return (
        <View>
            <View style={styles.tabsContainer}>

                <TouchableOpacity onPress={() => router.push('/search/hub')}>
                    <FontAwesome name="search" size={28} color="white" />

                </TouchableOpacity>
                <TouchableOpacity  onPress={() => router.push('/messages/hub')}>
                    <AntDesign name="message1" size={28} color="white" />

                </TouchableOpacity>

                <ScreenHeaderBtn user={user}
                        dimension = "80%"/>
            </View>

        </View>
    )

}

export default RootTabs