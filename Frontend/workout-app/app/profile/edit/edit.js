import { Text, View, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import ProfilePic from "../../../component/profile/edit/editprofilepic/profilePic";
import EditForm from "../../../component/profile/edit/editform/editForm";
import ProfileBack from "../../../component/buttons/profileback";
import GoBack from "../../../component/buttons/goBackButton";

const Edit= () => {
    const user ={
        id:1, 
        username: 'Damor200',
        profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
    }


    return (
        <SafeAreaView style ={{backgroundColor:'black', flex: 1,}}>
             <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: 'black'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <GoBack />
                    ),

                    headerTitle: ""
                }}
                />
                <ProfilePic user={user}/>
                <EditForm user={user}/>

        </SafeAreaView>
    )
}
export default Edit