import { View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./hubStyles"
import { useRouter } from "expo-router";

const Hub = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('./workout/workout')}
                style={styles.addWorkout}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Add Workout</Text>
                </View>

                <View style={styles.imgContainer}>
                    <Image  style={styles.img}
                    source={require('../../../../assets/images/R.png')} 
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('./post/post')} style={styles.addPost}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerRight}>Add Post</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image  style={styles.img}
                    source={require('../../../../assets/images/lost.png')} 
                    />
                </View>

            </TouchableOpacity>

        </View>

    )
}

export default Hub