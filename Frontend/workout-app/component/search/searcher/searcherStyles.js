import { StyleSheet, Dimensions} from "react-native";
import {COLORS} from '../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight= Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        justifyContent:'center',
        backgroundColor:'black',
    },
    textInputContainer: {
        alignItems:'center',

    },
    textInput: {
        backgroundColor: COLORS.primary,
        padding:10, 
        color:'white',
        borderRadius:20, 
        width:screenWidth/1.05,
        
    },
    list : {
        marginTop:20, 
        backgroundColor:COLORS.primary,
        padding: 10, 
        paddingTop:30, 
        minHeight: screenHeight/1.3
    },
    noUsers: {
        marginTop:20, 
        backgroundColor:COLORS.primary,
        height:400, 
        alignItems:'center',
        justifyContent:'center'
    },
    noUsersTextContainer: {
        backgroundColor:'black',
        padding:15, 
        borderRadius:20, 
    },
    noUsersText : {
        color: 'white',
        fontSize:20, 

    }

  });

export default styles