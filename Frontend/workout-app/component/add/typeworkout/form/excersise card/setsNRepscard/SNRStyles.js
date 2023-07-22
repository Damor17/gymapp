import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    infocontainer: {
        padding:10, 
        alignItems:'center',

    },
    header: {
        color:'white',
        fontSize:15, 
        borderBottomWidth:1.5,
        borderBottomColor:COLORS.primary,
        marginBottom:10, 
    },
    infotext: {
        color:'white'

    }
    
    
  
    

  });

export default styles