import { View, Text, ScrollView, Dimensions} from "react-native";
import styles from "./recoStyles";
import ExcersiseRec from "./excersiseCard/excersiseCard";
import Carousel from 'react-native-reanimated-carousel';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Rec = ({muscleGroups, type}) => {
    return (

        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    {`Recommended Excersises - ${type}`}
                </Text>
            </View>
            <Carousel
                width={width/1.15}
                style={{alignSelf:'center'}}
                height={height/2}
                data={muscleGroups}
                scrollAnimationDuration={1000}
                renderItem={({item}) => (
                    <ExcersiseRec    
                    excersise={item}/>
                )}
            />
            
        </View>
    )
}

export default Rec