import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        padding:10, 
        
    },
    midContainer: {
        backgroundColor:'black',
        padding:10, 
        borderRadius:20, 
        borderBottomColor:COLORS.primary,
        borderBottomWidth:2, 
    },
    headerContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',

    },
    headerCounter: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    headerCounterText: {
        color:'white',
        fontSize:24, 

    },
    headerTextContainer: {
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        color:'white',
        fontSize:12, 

    },
    streaksContainer: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding:10, 

    },
    streakDay : {
        alignItems:'center'

    },
    day : {
        color:'white',
        fontSize:11,
    }

  });

export default styles