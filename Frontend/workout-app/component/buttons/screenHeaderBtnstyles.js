import { StyleSheet } from "react-native";

import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  faicon: (dimension) => ({
    color: 'white',
    width: dimension,
    height: dimension,
  }),
});

export default styles;
