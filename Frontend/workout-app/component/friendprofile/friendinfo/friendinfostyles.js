import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    container : {
        flexDirection:'row',

    },
    imgcontainer: {
        width: screenWidth * .20,
        height: screenWidth * .20,
        borderRadius: 300,
        overflow: 'hidden',
        margin: 20, 
        marginLeft: 15, 
    
    },
    img : {
        width: '100%',
        height: '100%', 

    },
    txtcontainer: {

        justifyContent:'center',
        width: screenWidth * .68,
        padding: 10, 
    },
    txtusername: {
        color:'white',
        fontSize: 22, 
        marginBottom:10, 
    
    },
    txtbio : {
        color:'white',
        fontSize: 11, 
        fontWeight: 200, 

    },
    icons:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15, 

        alignItems:'center',
    },
    icontouch : {
        backgroundColor:'white',
        padding:10, 
    }

  });

export default styles