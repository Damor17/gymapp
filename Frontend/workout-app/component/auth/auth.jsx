import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Modal, Image} from "react-native";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Stack } from "expo-router";
import styles from "./authStyles";
import {COLORS} from '../../constants'
import { Dimensions} from "react-native"
const screenHeight = Dimensions.get('window').height

const cookies = new Cookies()

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
}



const Auth = () => {
    const [form, setForm] = useState(initialState)
    const [isSignUp, setIsSignUp] =  useState(true)
    const [animation, setAnimation] = useState(true)


    const handleChange= (section, text) => {
        setForm({... form, [section]: text})
    }

    const handleSumbit = async() => {
        const { username, password, phoneNumber} = form;

        const URL = 'http://localhost:5000/auth';

        try {
            const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
                username, password, fullName: form.fullName, phoneNumber
            });
    
            cookies.set('token', token);
            cookies.set('username', username);
            cookies.set('fullName', fullName);
            cookies.set('userId', userId);
    
            if(isSignUp) {
                cookies.set('phoneNumber', phoneNumber);
                cookies.set('hashedPassword', hashedPassword);
            }

        
            window.location.reload();

        } catch(er) {
            console.log(er.response.data)

        } 
        

    }


    return (
        <SafeAreaView>



            <Stack.Screen
            options = {{
                headerStyle : {backgroundColor: COLORS.primary},
                headerShadowVisible: false,
                headerTitle: ""
            }}
            />

        <View style={styles.container}>

            {animation ? (
                <View style={{        backgroundColor:'white',
                padding:30, 
                justifyContent:'center',
                elevation: 2, 
                shadowColor: '#000', 
                shadowOffset: { width: 8, height: 8 },
                shadowOpacity: 0.8,
                shadowRadius: 2,marginTop:screenHeight/10 }}> 
                    <View style={styles.animationContainer}> 
                        <View style={styles.imageContainer}> 
                        <Image  style={styles.img}source={require('../../assets/images/crunchlogo.png')} />
                        </View>
                    </View>
                        
                    <View style={styles.animationButtoncontainer}> 
                        <TouchableOpacity style={styles.animationButton} onPress={() => setAnimation(!animation)}>
                                <Text style={styles.animationButtonText}> Start</Text>
                            </TouchableOpacity>
                        
                    </View>
                    
                
                </View>
            ): (
                <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.header}>{isSignUp ? 'Sign Up': 'Sign In'}
                    </Text>
                    <>
                    {isSignUp ? (
                        <View style={styles.formContent}>
                            <View style={styles.formTabs}>
                                <View style={styles.formHeaderContainer}>
                                    <Text style={styles.formHeader}>
                                    Full Name 
                                </Text>
                                </View>

                                <TextInput
                                style={styles.formInput}
                                onChangeText={(text)=> handleChange('fullName', text)}
                                placeholder="Enter Name..."
                                
                                />
                            </View>
                            <View style={styles.formTabs}>
                                <View style={styles.formHeaderContainer}>
                                    <Text style={styles.formHeader}>
                                    Username
                                </Text>
                                </View>

                                <TextInput
                                style={styles.formInput}
                                onChangeText={(text)=> handleChange('username', text)}
                                placeholder="Enter Username..."
                                
                                />
                            </View>
                            <View style={styles.formTabs}>
                                <View style={styles.formHeaderContainer}>
                                    <Text style={styles.formHeader}>
                                    Phone Number
                                </Text>
                                </View>

                                <TextInput
                                style={styles.formInput}
                                onChangeText={(text)=> handleChange('phoneNumber', text)}
                                placeholder="Enter Phone Number..."
                               
                                />
                            </View>
                            <View style={styles.formTabs}>
                                <View style={styles.formHeaderContainer}>
                                    <Text style={styles.formHeader}>
                                    Password
                                </Text>
                                </View>

                                <TextInput
                                style={styles.formInput}
                                onChangeText={(text)=> handleChange('password', text)}
                                placeholder="Enter Password..."
                                
                                />
                            </View>
                            <View style={styles.formTabs}>
                                <View style={styles.formHeaderContainer}>
                                    <Text style={styles.formHeader}>
                                    Confirm Password
                                </Text>
                                </View>

                                <TextInput
                                style={styles.formInput}
                                onChangeText={(text)=> handleChange('confirmPassword', text)}

                                placeholder="Enter Password..."
                               
                                />
                            </View>

                        </View>

                    ): (
                        <View style={styles.formContent}>
                            <View style={styles.formTabs}>
                            <View style={styles.formTabs}>
                                <View style={styles.formHeaderContainer}>
                                    <Text style={styles.formHeader}>
                                    Username
                                </Text>
                                </View>

                                <TextInput
                                style={styles.formInput}
                                onChangeText={(text)=> handleChange('username', text)}
                                placeholder="Enter Username..."
                                />
                            </View>
                            <View style={styles.formTabs}>
                                <View style={styles.formHeaderContainer}>
                                    <Text style={styles.formHeader}>
                                    Password
                                </Text>
                                </View>

                                <TextInput
                                style={styles.formInput}
                                onChangeText={(text)=> handleChange('password', text)}
                                placeholder="Enter Password..."
                                />
                            </View>

                            </View>

                        </View>
                    )}  
                    </>

                    <View style={styles.bottom}>
                        <View>
                            <Text style={styles.bottomText}>
                                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                                <TouchableOpacity style={styles.buttonSignText} onPress={() => setIsSignUp(!isSignUp)}>
                                    <Text style={styles.signText}>
                                        {isSignUp ? 'Sign In' : 'Sign Up' }
                                    </Text>
                                </TouchableOpacity>
                                
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => handleSumbit()} style={{padding:10, backgroundColor: COLORS.primary, flexWrap: 'wrap', alignSelf: 'flex-start',  borderRadius:20, }}>
                            <Text style={{color:'white',}}>
                                {isSignUp ? "Sign Up": 'Sign In'}

                            </Text>
                            </TouchableOpacity>


                    </View>


                </View>
            </View>

            )}
            
        </View>


        </SafeAreaView>
    )
}

export default Auth