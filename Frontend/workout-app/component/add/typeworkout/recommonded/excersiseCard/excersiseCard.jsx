import { View, Text, Button, ScrollView, ActivityIndicator} from "react-native";
import styles from "./excerciseCardStyles";
import { Video, ResizeMode } from 'expo-av';
import { useRef, useState } from "react";
import useFetchRec from "../../../../../hooks/useFetchRec";
import { useSearchParams } from "expo-router";


const ExcersiseRec = ({excersise}) => {
    const {id} = useSearchParams()

    if (id !== 'Push' || id !== 'Pull') {
        id === 'Hold'
    }



    const {data, isLoading, error} = useFetchRec(excersise, id )

    if (isLoading) return <ActivityIndicator></ActivityIndicator>

    if (data) {
        console.log(excersise)
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text numberOfLines={1} style={styles.textHeader}>
                {excersise}
                </Text>
            </View>
            <View style={{marginTop:10, }}>
                <ScrollView>
                    <View style={styles.listContainer} >
                        {data.map((obj, index) => (
                            <View key={index}
                            style={styles.excersiseContainer}
                             >
                                <View style={styles.excersiseHeaderContainer}>
                                    <Text style={styles.excersiseHeaderText}>
                                    {obj.exercise_name}
                                    </Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <View style={styles.categoryContainer}>
                                        <View style={styles.excersiseHeaderContainer}>
                                            <Text style={styles.categoryHeader}>
                                        Category:
                                        </Text>
                                        </View>
                                        <Text style={styles.categoryText}>
                                            {obj.Category}
                                        </Text>
                                    </View>
                                    <View style={styles.categoryContainer}>
                                        <View style={styles.excersiseHeaderContainer}>
                                            <Text style={styles.categoryHeader}>
                                        Level:
                                        </Text>
                                        </View>
                                        <Text style={styles.categoryText}>
                                            {obj.Difficulty}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.stepsContainer}>
                                    <View style={styles.stepsHeader}>
                                        <View style={styles.excersiseHeaderContainer}>
                                            <Text style={styles.stepText}>
                                                How To Do It: 
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.actualsteps}>
                                        {obj.steps.map((step, index) => (
                                            <View style={styles.stepContainer}key={index}>
                                                <Text style={styles.stepIndex}>
                                                    {index + 1}
                                                </Text>
                                                <Text style={styles.stepText}>
                                                    {step}
                                                </Text>

                                            </View>
                                        ))}
                                    </View>
                                </View>

                            </View>
                        ))}

                    </View>
                </ScrollView>
            </View>

        </View>
    ) }
}

export default ExcersiseRec