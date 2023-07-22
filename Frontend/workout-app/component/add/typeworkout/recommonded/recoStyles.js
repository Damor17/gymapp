import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex:1, 
        padding:10, 
        marginTop:20, 

    },
    headerContainer: {
        borderBottomWidth:2,
        borderBottomColor:COLORS.primary,
        padding:5, 
        marginBottom:20, 
        backgroundColor:"black"
    },
    headerText: {
        color:'white',
        fontSize:22,
    },
    scrollContainer: {
        padding:10, 
        borderRadius:20, 
        backgroundColor:COLORS.primary
    }


  });

export default styles