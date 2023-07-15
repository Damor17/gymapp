import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {COLORS} from '../../../constants'
const screenWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        flex:1, 
        justifyContent:'center',
        borderTopWidth:2, 
        borderTopColor: COLORS.primary
    },
    colored: {
        backgroundColor:COLORS.primary,
        padding:30,
        borderRadius:20,
        marginBottom:120, 
    },
    texter: {
        fontSize:24,
        color:'white',
        fontWeight:500,
    }
  });

export default styles