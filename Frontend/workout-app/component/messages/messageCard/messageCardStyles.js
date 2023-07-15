import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from '../../../constants'
const screenWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor: 'black',
        padding:10, 
        borderRadius:20, 
        marginBottom:5, 

    },
    leftSide : {
        flexDirection:'row'

    },
    imgContainer: {
        width:60, 
        height:60, 
        borderRadius:50, 
        overflow:'hidden',
        backgroundColor:'white'

    },
    img : {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    textContainer: {
        marginLeft:20, 

    },
    usernameText: {
        color:'white',
        fontSize:18,
        fontWeight:700, 

    },
    messageText : {
        color:'white',
        fontSize: 11,

    }

   
 
});

export default styles;
