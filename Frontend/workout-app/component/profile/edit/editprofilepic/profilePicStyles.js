import { StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        justifyContent: 'center',
        width: screenWidth,
        height: 200, 
        alignItems:'center',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    imgcontainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 15,
    },
    headerContainer: {
    },
    headerText : {
        color: 'white',
        fontSize: 23, 
    }

  });

export default styles