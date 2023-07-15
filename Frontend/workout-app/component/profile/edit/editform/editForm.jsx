import {View, TouchableOpacity, TextInput, Text} from 'react-native'
import styles from './editformstyles'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const EditForm = ({user}) => {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputBio, setInputBio] = useState('')

   


    return (
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.together}>
                    <View style={styles.icon}>
                            <AntDesign name="user" size={29} color="black" />

                    </View>

                    <TextInput
                    style={styles.textInput}
                    value= {inputUsername}
                    onChangeText={setInputUsername}
                    placeholder= {user.username}
                    />
                </View>
                <View style={styles.together}>
                    <View style={styles.icon}>
                        <Entypo name="key" size={29} color="black" />

                    </View>

                    <TextInput
                    style={styles.textInput}
                    value= {inputPassword}
                    onChangeText={setInputPassword}
                    placeholder= 'Password'
                    />
                </View>
                <View style={styles.together}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="bio" size={29} color="black" />

                    </View>

                    <TextInput
                    style={styles.textInput}
                    value= {inputBio}
                    onChangeText={setInputBio}
                    placeholder= '...'
                    />
                </View>
            </View>
            <View style = {styles.bottom}>
                <TouchableOpacity onPress={() => Logout()}style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
export default EditForm 