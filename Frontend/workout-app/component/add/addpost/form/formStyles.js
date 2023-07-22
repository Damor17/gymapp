import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.primary,
        padding:10,
    },
    formContainer: {
        backgroundColor:'black',
        padding:10, 
        borderRadius:20, 
        paddingBottom:20,
    },
    headerContainer: {
        alignItems:'center',
        padding:10,
        borderBottomColor:COLORS.primary,
        borderBottomWidth:2, 
        marginBottom:20, 
    },
    headerText: {
        color:'white',
        fontSize:24, 
    },
    titleContainer: {
        padding:10,
    },
    titleText: {
        color:'white',
        fontSize:20,
        backgroundColor:'black',
        padding:10,
        borderRadius:20, 
    },
    underlineTextContainer: {
        backgroundColor:COLORS.primary,
        borderRadius:20, 
        padding:2,
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
    },
    textInputTitle : {
        color:'white',
        padding:10,
        borderRadius:20,
        borderBottomColor:COLORS.primary,
        borderBottomWidth:2,
        marginBottom:20,

    }



  });

export default styles