import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from '../../../constants'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
    textInputContainer: {
        alignItems:'center',

    },
    textInput: {
        marginTop:10, 
        backgroundColor: 'black',
        padding:10, 
        color:'white',
        borderRadius:20, 
        width:screenWidth/1.05,
        borderBottomColor: COLORS.primary,
        borderBottomWidth:5, 

    },
    flatListContainer: {
        backgroundColor:'black',
        marginTop:20, 
        padding:10, 
        minHeight: screenHeight/1.6,

    },
    horizontalContainer: { 
        backgroundColor:COLORS.primary,
        padding:10, 
        marginTop:15, 
        minHeight:140, 
        borderRadius:5, 
    }
 
});

export default styles;
