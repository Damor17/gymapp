import { View, ScrollView, SafeAreaView, Text, Modal, TouchableOpacity} from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import {COLORS, icons, images, SIZES} from '../constants'
import ScreenHeaderBtn from "../component/buttons/screenHeaderBtn";
import Welcome from "../component/homepage/welcome/welcome";
import Feed from "../component/homepage/feed/feed";
import Footer from "../component/footer/footer";
import SettingsButton from "../component/buttons/settingsButton";
import { AntDesign } from '@expo/vector-icons';
import Cookies from "universal-cookie";
import Auth from "../component/auth/auth";
import { StreamChat } from "stream-chat";
import RootTabs from "../component/miscellaneous/rootTabs/rootTabs";

const apiKey = 'qq6rvrmw9x3m'
const cookies = new Cookies()

const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey)


if(authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}



const Home = () => {
    const router = useRouter()
    const user ={
            id:1, 
            username: 'Damor200',
            profilepic: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg',
        }

    const [modalVisible, setModalVisible] = useState(false);
    
    const handleModal = () => {
        setModalVisible(!modalVisible);
    };

    const Logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');
    
        window.location.reload();
    
    }

    const handlePressRoutes = (place) => {
        router.push(`/${place}`)
        setModalVisible(!modalVisible)
    }




    if (!authToken) return <Auth />


    
    return (
        <SafeAreaView style = {{flex:1, backgroundColor: 'black'}

        }>
            <Stack.Screen
                options = {{
                    headerStyle : {backgroundColor: 'black'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        < SettingsButton
                        handleModal={handleModal}
                        modalVisible ={modalVisible}
                        name = "menu" 
                        />
                    ),
                    headerRight: () => (
                        <RootTabs user={user} />
                    ),
                    headerTitle: ""
                }}
                />

            <Modal visible={modalVisible}        
            transparent
            animationIn="slideInLeft"
            style={{ justifyContent: 'center',
            alignItems: 'center',}}
            >
                <View style={{ backgroundColor: 'black', borderRadius:30, padding: 30,width: '50%',}}>
                    <View style={{position:'relative',
                    justifyContent:'flex-end',
                    alignItems:'flex-start', marginBottom:20, marginTop:30, }}>
                        <TouchableOpacity onPress={handleModal} style={{position:'relative',top:0, right:0, }}>
                        <AntDesign name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }} onPress={()=> handlePressRoutes('/')}>
                            <Text style={{color:'white', fontSize:18,  }}> Home</Text>
                        </TouchableOpacity>    
                        <TouchableOpacity style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }} onPress={()=> handlePressRoutes(`/profile/${user.id}`)}>
                            <Text style={{color:'white', fontSize:18,  }}> Profile</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }} onPress={()=> handlePressRoutes(`/profile/options/posts`)}>
                            <Text style={{color:'white', fontSize:18,  }}> Posts</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={()=>Logout()} style={{marginBottom:10, borderBottomWidth:1, borderBottomColor: 'white', }}>
                            <Text style={{color:'white', fontSize:18,  }}> Logout</Text>
                        </TouchableOpacity>   

                    </View>



                </View>

                

            </Modal>


            <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
            >
                <View style = {{flex:1, padding: SIZES.medium}}>
                    <Welcome user={user}/>

                </View>
                <Feed/>
            </ScrollView>
            <Footer
            user ={user}
            />

            
        </SafeAreaView>
    )
}

export default Home