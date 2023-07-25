import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'black',
        flexDirection:'row-reverse'
    },
    button: {
        backgroundColor:COLORS.primary,
        padding:10,
        borderRadius:20, 

    },
    btnText: {
        color:'white',
        fontSize:15,

    }
    




  });

export default styles