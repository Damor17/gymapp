import { StyleSheet, Dimensions} from "react-native";
const screenWidth = Dimensions.get('window').width
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '../../../constants'



const styles = StyleSheet.create({
    Text: {
        margin: 20, 
        color:'white',
        fontSize: 20, 
        fontWeight: 600, 
        
    },
    tabContainer: {
      margin: 10,  
      flex:1, 
    },
    twoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between'

    },

    bodyContainer: {
      marginBottom: 30, 
      flexDirection: 'row',
      backgroundColor: COLORS.primary,
      padding: 10, 
      borderRadius: 30, 
      alignItems: 'center',
      justifyContent:'space-between'
    },
    goalsContainer: {
      marginBottom: 30, 
      flexDirection: 'row',
      backgroundColor: 'purple',
      padding: 10, 
      borderRadius: 30, 
      alignItems: 'center',
      justifyContent:'space-between'
    },
    settingsContainer: {
      marginBottom: 30, 
      flexDirection: 'row',
      backgroundColor: COLORS.tertiary,
      padding: 10, 
      borderRadius: 30, 
      alignItems: 'center',
      justifyContent:'space-between'
    }


  });

export default styles