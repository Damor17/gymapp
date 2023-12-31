import { View, ScrollView, Text} from "react-native";
import styles from "./achieveStyles";


const AchievementsView = ({color, modalInformation}) => {
    return (
        <View style={styles.container}>
            <View style={{ padding:4, 
        alignItems:'center',
        borderBottomColor:color,
        borderBottomWidth:2, }}>
                <Text style={styles.headerText}>Achievements</Text>
            </View>
            <ScrollView>
                {modalInformation.map((obj, index) => (
                    <View style={styles.objContainer}key={index}>
                        <View style={{  flexWrap:'wrap',alignSelf: 'flex-start', borderBottomColor:color, borderBottomWidth:2, paddingLeft:2, paddingRight:2, }}>
                            <Text style={styles.dateText}>{obj.date}</Text>

                        </View>
                        <View style={styles.achieveBody}>
                            <Text style={styles.excersies}>
                                {obj.excersise}
                            </Text>
                            <Text style={styles.pr}>
                               {`${obj.PR} lbs`}
                            </Text>

                        </View>
        

                    </View>
                ))}

            </ScrollView>

        </View>
    )
}

export default AchievementsView