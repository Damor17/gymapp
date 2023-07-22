import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        padding:10, 
    },
    infoContainer: {
        padding:10, 
        borderRadius:20, 
        justifyContent:'space-between',

    },
    btn: {
        backgroundColor:COLORS.primary,
        padding:5, 
        borderRadius:20, 
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'

    },
    btnText: {
        color:'white',
        fontSize:18, 

    },
    btnTextContainer: {
        padding:10,

    },
    addcontainer: {
        padding:10, 
    
        borderRadius:20, 
        postion:'relative',
        marginBottom:20, 

    },
    headerContainer: {

    },
    headerTextInput: {
        borderBottomColor:COLORS.primary,
        borderBottomWidth:1.5,
        borderRadius:20, 
        color:'white',
        padding:10, 
        
    },
    addBody: {
        borderRadius:20, 
        borderBottomColor:COLORS.primary,
        borderBottomWidth:2, 
        padding:10, 
    },
    addSNRcontainer: {
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    addSNRinfocontainer: {
        padding:10, 
        alignItems:'center',

    },
    addSNRheader: {
        color:'white',
        fontSize:15, 
        borderBottomWidth:1.5,
        borderBottomColor:COLORS.primary,
        marginBottom:10, 
    },
    addSNRText: {
        color:'white',
        alignItems:'center',
        width:40, 
        textAlign: 'center',

        
    },
    numberfr: {
        color:'white',
        fontSize:20,
    }
  
    

  });

export default styles