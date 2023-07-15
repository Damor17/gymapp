import { View, TouchableOpacity, Text, TouchableWithoutFeedback, Dimensions} from "react-native";
import styles from "./infoGoalsStyles";
import Carousel from 'react-native-reanimated-carousel';
import { LinearGradient } from "expo-linear-gradient";


const InfoGoals = () => {
    data = [
        {
            goal: 'Be the very Best lolski',
            image: '',
            progress: ''

        },
        {

        },



    ]
    const width = Dimensions.get('window').width

    return (
        <View >

            <LinearGradient style={styles.textContainer}
            colors={['purple', '#000000' ]}
            start={{x:0, y:0}}
            end={{x:1, y:1}}
            >
                <View>
                    <Text style={styles.headerUp}>Your</Text>
                    <Text style={styles.headerDown}>Goals: </Text>
                </View>
            </LinearGradient>
            <Carousel
                width={width}
                height={width/1.5}

                data={data}

                scrollAnimationDuration={1000}
                renderItem={({ item}) => (
                    <View
                        style={{
                            height: 200,
                            borderWidth: 1,
                            borderColor: 'white',
                            backgroundColor: 'purple',
                            padding: 10, 
                            borderRadius: 500, 
                            justifyContent:'center',
                        }}
                    >
                        <Text style={{ 
                            textAlign: 'center', 
                            color:'white',fontSize: 20 }}>
                            {item.goal}
                        </Text>
                    </View>
                )}
            />

            
        </View>

        
    )
}


export default InfoGoals