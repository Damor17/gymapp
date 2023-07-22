import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../../constants'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height



const styles = StyleSheet.create({
    container: {
        padding:10, 
        backgroundColor:COLORS.primary,
        borderRadius:20, 
        postion:'relative',
        marginBottom:20, 
    },
    header: {
        color:'white',
        fontSize:18, 
        borderBottomColor:COLORS.primary,
        borderBottomWidth:1.5,
        borderBottomEndRadius:10, 

    },
    headerContainer: {
        backgroundColor:'black',
        position:'absolute',
        top:0, 
        left:0, 
        padding:10,
        borderBottomEndRadius:20, 
    },
    infoContainer: {
        backgroundColor:'black',
        padding:10, 
        borderRadius:20, 
        marginTop:10,
        marginTop:50 , 
    },
    addContainer: {
        padding:10, 
        backgroundColor:COLORS.primary,
        borderRadius:20, 
        postion:'relative',
        marginBottom:20, 
    }
    
  
    

  });

export default styles