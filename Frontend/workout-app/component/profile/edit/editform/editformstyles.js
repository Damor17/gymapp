import { StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    text: {
        color:'white'
    },
    inputContainer: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: 15, 


    },

    textInput : {
        color: 'black',
        backgroundColor: 'white',
        padding: 10, 
        width:screenWidth/1.8,
    },
    icon : {
        padding: 10, 
        borderRightWidth:2, 
        borderRightColor: 'Black'
    },
    together: {
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        padding: 10,

    },
    bottom: {
        alignItems:'center', 
        justifyContent:'center',
        marginTop:30, 
    },
    logoutButton: {

        backgroundColor:'red',
        padding:10, 
        borderRadius:20, 
    },
    logoutText: {
        fontSize:20, color:'white',
        fontWeight:500, 
    }


  });

export default styles