import { SafeAreaView, View, ScrollView } from "react-native";
import Types from "../../../component/add/addworkout/types/Types";
import GoBack from "../../../component/buttons/goBackButton";
import { Stack } from "expo-router";


const AddWorkout = () => {
    return (
        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}}>
            <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: 'black'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <GoBack                        place = {'/'}
                        />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Types />
            </ScrollView>
            

        </SafeAreaView>
    )
}

export default AddWorkout