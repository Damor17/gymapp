import { View, Text} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from "./streakStyles";
import {COLORS} from '../../../../constants'

const days = ['S','M', 'T', 'W', 'T', 'F', 'S']



const Streak = () => {
    return (
        <View style={styles.container}>
            <View style={styles.midContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerCounter}>
                        <FontAwesome5 name="gripfire" size={35} color={COLORS.primary} />
                        <Text style={styles.headerCounterText}> 8</Text>

                    </View>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Complete A Workout Everyday To Keep A Streak</Text>

                    </View>


                </View>
                <View style={styles.streaksContainer}>
                    {days.map((day, index) => (
                        <View style={styles.streakDay} key={index}>
                             <FontAwesome5 name="gripfire" size={20} color={COLORS.primary} />
                             <Text style={styles.day}>
                                {day}
                             </Text>
                            

                        </View>
                    ))}

                </View>
            </View >

        </View>
    )
}

export default Streak