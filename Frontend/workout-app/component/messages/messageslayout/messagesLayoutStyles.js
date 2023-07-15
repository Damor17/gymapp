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
        backgroundColor:COLORS.primary,
        marginTop:20, 
        padding:10, 
        minHeight: screenHeight,

    }
 
});

export default styles;
