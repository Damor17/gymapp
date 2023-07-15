import { StyleSheet, Dimensions} from "react-native";
import {COLORS} from '../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight= Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:10, 
        marginBottom:10, 
        padding:10, 
    },
    leftSide: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    imageContainer: {
        width:60, 
        height:60, 
        borderRadius:50, 
        overflow:'hidden',
        backgroundColor:'white'

    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    textProfile : {
        color:'white',
        fontSize:13, 
        marginLeft:10,
        borderBottomColor:COLORS.primary,
        borderBottomWidth:1.5, 
    },
    rightSide: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:70, 
        paddingRight:10, 

    }


    

  });

export default styles