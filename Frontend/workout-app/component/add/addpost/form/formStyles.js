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
        borderRadius:30, 
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
        borderRadius:20,
    },
    titleContainer: {
        padding:5,
        marginBottom:10,
        borderRadius:20,
    },
    titleText: {
        color:'white',
        fontSize:16,
        padding:8, 
        borderRadius:20, 
    },
    underlineTextContainer: {
        backgroundColor:'black',
        borderRadius:20, 
        padding:2,
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
    },
    textInputTitle : {
        color:'white',
        padding:10,
        borderRadius:20,
        fontSize:12,
        borderBottomColor:COLORS.primary,
        borderBottomWidth:2,
        marginBottom:20,

    }



  });

export default styles