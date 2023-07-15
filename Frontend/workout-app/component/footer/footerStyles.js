import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants'


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingTop: 10,
      backgroundColor:'black',
      justifyContent:'space-evenly'

    },
    btnContainer: {
        width: 40,
        height: 40,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
      },

    faicon: (dimension) => ({
        color: 'white',
        width: dimension,
        height: dimension,
      }),

  });

export default styles