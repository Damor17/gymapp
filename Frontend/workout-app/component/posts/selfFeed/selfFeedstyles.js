import { StyleSheet, Dimensions} from "react-native";
const screenWidth = Dimensions.get('window').width



const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width:screenWidth,
    },
    imgContainer: {
        marginLeft:20, 
        width:100,
        height:100,
        borderRadius:50,
        overflow:'hidden',
        backgroundColor:'white'
    },
    img :{
        width: '100%',
        height: '100%'
    },
    username: {
        color:'white',
        fontSize: 20, 
        fontWeight:600, 
    },
    biography: {
        color:'white',
        fontWeight:200, 

    },
    txtContainer: {
        marginLeft: 20,
        justifyContent:'center',
        width: screenWidth * .66,
        padding: 10, 
    }

  });

export default styles