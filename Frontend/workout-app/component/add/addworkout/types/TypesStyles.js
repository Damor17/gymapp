import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex:1, 
    padding:10, 
  },
  mapContainer: {
    justifyContent:'space-between'

  }

  });

export default styles