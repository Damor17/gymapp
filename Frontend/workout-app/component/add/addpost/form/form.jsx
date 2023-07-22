import { View, Text, TextInput} from "react-native";
import styles from "./formStyles";
import { useState } from "react";

const Form = ({handleChange}) => {


    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}> New Post</Text>
                </View>
                <View style={styles.titleContainer}>
                    <View style={styles.underlineTextContainer}>
                        <Text style={styles.titleText}>Caption:</Text>
                    </View>
                </View>
                <TextInput 
                onChangeText={(text)=> handleChange('title', text)}
                style={styles.textInputTitle}
                placeholder="Type Caption Here Pussy.."
                />


                <View style={styles.titleContainer}>
                    <View style={styles.underlineTextContainer}>
                        <Text style={styles.titleText}>Description:</Text>
                    </View>
                </View>
                <TextInput 
                onChangeText={(text)=> handleChange('description', text)}
                style={styles.textInputTitle}
                placeholder="Type Description Here Pussy..."
                />

            </View>
        </View>

    )
}
export default Form