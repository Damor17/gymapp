import { View, Text } from "react-native";
import styles from "./TypesStyles";
import TypeCard from "../typecard/typecard";
import {COLORS, images} from '../../../../constants'
import { useRouter } from "expo-router";

const Types = () => {
    const typeWorkouts = [
        {
            type: 'Push',
            color: COLORS.primary,
            secondColor: 'rgb(249, 52, 131)',
            muscles: 'Chest, Triceps, Shoulders',
            image: images.push

        },
        {
            type: 'Pull',
            color: 'rgb(204, 51, 255)',
            secondColor: 'rgb(214, 92, 255)',
            muscles: 'Back and Bicep',
            image: images.pull

        },
        {
            type: 'Legs',
            color: 'rgb(195, 75, 123)',
            secondColor: 'rgb(197, 109, 144)',
            muscles: 'Quads, Glutes, Hamstrings, and Calves',
            image: images.legs

        },
        {
            type: 'Arms',
            color: 'rgb(0, 161, 214)',
            secondColor: 'rgb(115, 191, 217)',
            muscles: 'Triceps, Shoulders, and Biceps',
            image: images.arms

        },
        {
            type: 'Custom',
            color: '#4dffdb',
            secondColor: '#80ffe5',
            muscles: 'Create Any Plan With Your Desired Muscle Groups',
            image: images.custom

        },
        
    ]

    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>

                {typeWorkouts.map((type, index) => (
                    <TypeCard type={type} key={index}/>
                ))}
            </View>

           



        </View>
    )
}

export default Types