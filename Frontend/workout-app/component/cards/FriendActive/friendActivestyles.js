import { StyleSheet } from "react-native";

import {COLORS, SIZES} from '../../../constants'

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      marginLeft:20,
      marginRight:20,
      alignItems: 'center',


    },
    logo: {
    
      width: 100,
      height: 100,
      borderRadius:50, 
      borderWidth: 1, borderColor: 'white',
      padding:2,
      backgroundColor:'white',
      marginBottom: 5,
      overflow:'hidden'
    },
    textcolor : {
        color:'white'
    }

  });

export default styles