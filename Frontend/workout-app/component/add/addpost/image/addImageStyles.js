import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10

    },
    infoContainer: {
        backgroundColor:'black',
        padding:15,
        alignItems:'center'
    },
    imgContainer: {
        marginTop:20, 
        width:300,
        height:300,
        padding:10, 
        alignItems:'center',
        justifyContent:'center'
    },
    img: {
        width:'100%',
        height:'100%',
        resizeMode: 'contain',
    },
    btn: {
        backgroundColor:COLORS.primary,
        padding:10,
        borderRadius:20,
    }




  });

export default styles