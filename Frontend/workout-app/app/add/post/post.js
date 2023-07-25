import { SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import GoBack from "../../../component/buttons/goBackButton";
import Form from "../../../component/add/addpost/form/form";
import AddImage from "../../../component/add/addpost/image/addImage";
import Submit from "../../../component/add/addpost/submit/submit";
import {COLORS} from '../../../constants'
import { useState } from "react";


const AddPost = () => {
    const initialState = {
        title: '',
        description: '',
        image: '',
    }


    const [form, setForm] = useState(initialState)

    const handleChange= (section, text) => {
        setForm({... form, [section]: text})
    }

    console.log(form)




    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.primary}}>
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
                <Form
                handleChange= {handleChange}
                />
                <AddImage 
                handleChange={handleChange}
                />
            </ScrollView>

            
            <Submit  
            initialState={initialState}
            form={form} setForm={setForm}/>
        </SafeAreaView>
    
    )
}

export default AddPost