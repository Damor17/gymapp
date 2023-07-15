import { StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: 160,

    },
    buttons: {
        marginRight:20, 
    }
    

  });

export default styles