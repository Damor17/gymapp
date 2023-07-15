import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./basicInfostyles";
import { AntDesign } from '@expo/vector-icons'; 
import { useRouter } from "expo-router";


const BasicInfo = ({user}) => {
    const router = useRouter()
    return (

            <View style={styles.headerContainter}>
                <View>
                    <View style={styles.imgContainer}>
                        <Image  style={styles.img} source={{uri: user.profilepic}}
                        />
                    </View>
                    <TouchableOpacity style={styles.editicon} onPress={() => router.push('/profile/edit/edit')}>
                        <AntDesign name="edit" size={15} color="black" />

                    </TouchableOpacity>
                </View>
                <View style={styles.thcontainer}>
                    <Text style={styles.textHeaderUsername}>
                            {user.username}
                    </Text>
                    <View style = {{color:'white', flexDirection:'row', flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
                        <Text style={styles.textHeader}>
                            {user.biography}
                        </Text>
                    </View>


                </View>
            </View>

    )
}

export default BasicInfo