import { View, Text } from "react-native";
import styles from "./SNRStyles";


const SNRCard =  ({info}) => {
    return (
        <View style={styles.container}>
            <View style={styles.infocontainer}>
                <Text style={styles.header}>Sets</Text>
                <Text style={styles.infotext}>{info.sets} </Text>
            </View>
            <View style={styles.infocontainer}>
                <Text style={styles.header}>Reps</Text>
                <Text style={styles.infotext}>{info.reps} </Text>
            </View>
            <View style={styles.infocontainer}>
                <Text style={styles.header}>Weight</Text>
                <Text style={styles.infotext}>{`${info.weight} lbs`} </Text>
            </View>


        </View>

    )
}

export default SNRCard