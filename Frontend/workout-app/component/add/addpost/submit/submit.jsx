import { View, Text, TouchableOpacity} from "react-native";
import styles from "./sumbitStyles";
import { useRouter } from "expo-router";


const Submit = ({initialState, form, setForm}) => {
    const router = useRouter()

    const handleSumbit = () => {
        setForm(initialState)
        router.push('/')
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleSumbit()}style={styles.button}>
                <Text style={styles.btnText}>
                    Submit
                </Text>

            </TouchableOpacity>

        </View>
    )
}

export default Submit