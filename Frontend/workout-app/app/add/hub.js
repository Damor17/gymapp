import { View, SafeAreaView} from "react-native";
import { Stack } from "expo-router";
import ProfileBack from "../../component/buttons/profileback";
import Hub from "../../component/add/addhub/hub/hub";
import Streak from "../../component/add/addhub/streak/streak";


const AddHub = () => {
    return (
        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}}>
            <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: 'black'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ProfileBack
                        place = {'/'}
                        />
                    ),
                    headerTitle: ""
                }}
            />
            <Streak />
            <Hub />


        </SafeAreaView>
    )
}
export default AddHub