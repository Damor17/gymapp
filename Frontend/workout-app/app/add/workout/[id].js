import { SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import GoBack from "../../../component/buttons/goBackButton";
import { useSearchParams } from "expo-router";
import Rec from "../../../component/add/typeworkout/recommonded/recommended";
import WorkoutForm from "../../../component/add/typeworkout/form/form";


const Type = () => {
    const {id} = useSearchParams();
    let muscleGroups = []


    if (id === "Push") {
        muscleGroups= ['Chest', 'Triceps', 'Shoulders']

    } else if (id === 'Pull') {
        muscleGroups= ['Mid back', 'Lower back','Biceps', 'Lats']

    } else if (id === 'Legs') {
        muscleGroups= ["Quads", "Glutes", "Hamstrings", "Calves"]

    } else if (id === 'Arms') {
        muscleGroups= ['Forearms', 'Biceps', 'Triceps', 'Shoulders']

    } else if (id === 'Custom') {
        muscleGroups= ['Forearms', 'Abdominals', 'Obliques']

    }






    if (!id) return (<ActivityIndicator />)

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
            <ScrollView>
                <WorkoutForm />
                <Rec muscleGroups={muscleGroups} type={id}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Type 