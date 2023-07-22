import { StyleSheet, Dimensions} from "react-native";
import {COLORS} from '../../../constants'
const screenWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    container: {
        marginTop:10, 
        paddingLeft:20,
        paddingRight:20,
    },
    headerContainer: {
      marginBottom:20,
    },
    headerTextContainer:{
      borderBottomWidth:5, padding:2, borderBottomColor: COLORS.primary, flexWrap: 'wrap', alignSelf:'center',alignSelf: 'flex-start',
      alignSelf:'center',
      backgroundColor:'black',
      paddingLeft:10,
      paddingRight:10, 
      paddingTop:10,
      borderRadius:20, 
      marginBottom:10,
      
    },
    headerText: {
      color:'white',
      fontSize:22
  
    },

    
  });

export default styles