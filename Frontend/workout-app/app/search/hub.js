import { SafeAreaView, View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import ProfileBack from "../../component/buttons/profileback";
import Footer from "../../component/footer/footer";
import Searcher from "../../component/search/searcher/searcher";


const SearchPage = () => {
    const user ={
        id:1, 
        username: 'Damor200',
        profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
    }



    return (
        <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
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

            <Searcher/>


            <Footer user={user} />


        </SafeAreaView>
    )

}

export default SearchPage
