import { StyleSheet, Dimensions} from "react-native";
import {COLORS} from '../../../constants'
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection:'row'


    },
    textContainer: {
        marginTop:10, 
        width: screenWidth/2.5, 
        height: screenWidth/2.5, 
        borderRadius: 200, 
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 40, 

    },

    headerUp: {
        color:'white',
        fontSize: 20,
        fontWeight:500,
    },
    headerDown: {
        color: 'white',
        fontSize: 35,
        fontWeight:500,

    }

  });

export default styles