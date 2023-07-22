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
        borderBottomColor:COLORS.primary,
        borderBottomWidth:2, 
        justifyContent:'space-between'

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

    },
    rigthSide: {
        justifyContent:'space-between',
        padding:5, 
        alignItems:'center'

    },
    numberContainer: {
        borderRadius:20, 
        height:20,
        width:20,
        backgroundColor: COLORS.primary,
        alignItems:'center',
        justifyContent:'center',

    },
    number : {
        fontSize:12,
        fontWeight:600,
        color:'white'

    },
    date : {
        color:'white',
        borderBottomColor:COLORS.primary, 
        borderBottomWidth:1.5,
        fontSize:13, 

    }

   
 
});

export default styles;
