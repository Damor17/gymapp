import { View, Text, Image, TouchableOpacity} from "react-native";

import styles from "./horizontalCardStyles";


const HorizontalCard = ({item}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img}
                source={{uri: item.profilepic}}
                />

            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {item.username}

                </Text>

            </View>

        </TouchableOpacity>
    )
}

export default HorizontalCard