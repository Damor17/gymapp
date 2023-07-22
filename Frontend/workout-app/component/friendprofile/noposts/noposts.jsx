import { View, Text } from "react-native";


const NoPosts = () => {
    return (
        <View style={{alignItems:"center", justifyContent:'center', flex:1, }}>
            <View style={{height:300, width:300,justifyContent:'center' }}>

                    <Text style={{alignSelf:'center', color:'white', fontSize:24, }}>
                    No Posts
                    </Text>


            </View>
        </View>

    )
}

export default NoPosts