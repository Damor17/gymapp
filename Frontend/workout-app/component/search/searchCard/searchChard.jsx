import { View, Image, Text, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";

import styles from "./searchCardStyles";

const SearchCard = ({item}) => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftSide} onPress={() => router.push(`/users/${item.id}`)}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                    source={{uri:item.profilepic}}
                    />
                </View>
                <Text style={styles.textProfile}>
                        {item.username}
                </Text>
            </TouchableOpacity>
            <View style={styles.rightSide}>
                <TouchableOpacity >
                    <AntDesign name="adduser" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity >
                    <AntDesign name="message1" size={24} color="white" />
                </TouchableOpacity>

            </View>

        </View>

    )
}

export default SearchCard