import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from '../../../constants'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
    container: {
        padding:10, 
        alignItems:'center'
    },
    imgContainer: {
        width:90,
        height:90,
        borderRadius:60,
        backgroundColor:'white',
        overflow:'hidden',
        marginBottom:10, 
    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'


    },
    text: {
        color:'white',
        fontSize:10, 
        fontWeight:600, 
        borderBottomColor:COLORS.primary,
        paddingBottom:2, 
        borderBottomWidth:1.5, 

    },
    textContainer: {
        backgroundColor:'black',
        borderRadius:10, 
        paddingLeft:10,
        paddingRight:10, 
        paddingBottom:4, 
    }
 
});

export default styles;
