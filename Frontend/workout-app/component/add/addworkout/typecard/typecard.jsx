import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
import { useRouter } from "expo-router";

const TypeCard = ({type}) => {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => router.push(`./${type.type}`)} style={{backgroundColor:type.color, flexDirection:'row', borderRadius:20, marginBottom:20, }}>
            <View style={{justifyContent:'center', alignItems:'center', padding:10, position:'relative', flex:'40%' }}>
                <View style={{position:'absolute', top:0, left:0, backgroundColor: type.secondColor, padding:8, paddingRight:20, 
                paddingBottom:10, borderBottomEndRadius:25, minWidth:screenWidth/2., }}>
                    <Text style={{color:'white', fontSize:15, fontWeight:500, }}>{type.muscles}</Text>
                </View>
                <View style={{padding:10, alignItems:'center' }}>
                    <Text style={{color:'white', fontSize:26, fontWeight:800,  }}>{type.type}</Text>
                </View>

            </View>
            <View style={{width:200, height:200, overflow:'hidden',}}>
                <Image style={{width:'100%', height:'100%',  resizeMode: 'contain', }}
                source={type.image} />
            </View>

        </TouchableOpacity>

    )
}
export default TypeCard