import { View, Text, TouchableOpacity, TextInput} from "react-native";
import styles from "./excersiesCardStyles";
import SNRCard from "./setsNRepscard/SNR";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 





const ExcersiseCard = ({data, setData, object, index, add ,setAdd}) => {

    const handleDelete = () => {
        const newdata = data.filter((_, idx) => idx !== index)

        setData(newdata)
    }


    return (
        <>
            <View style={styles.container}>
                    <View style={styles.headerContainer}> 
                        <Text style={styles.header}> {object.excersise} </Text>

                    </View>
                    <TouchableOpacity style={{position:'absolute', top:0, right:0, padding:10, }} onPress={() => handleDelete()}>
                        <MaterialCommunityIcons name="delete-empty" size={34} color="black" />
                    </TouchableOpacity>
                <View style={styles.infoContainer}>
                    {object.SetNReps.map((info, index) => (
                        <SNRCard key={index} info={info}/>
                    ))}

                </View>
            </View>
            
        </>
    )
}

export default ExcersiseCard