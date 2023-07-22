import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        justifyContent:"space-evenly",
        flex:1, 
    },
    addWorkout : {
        backgroundColor:COLORS.primary,
        borderRadius:30,
        overflow:'hidden',
        elevation: 2, 
        shadowColor: COLORS.primary, 
        shadowOffset: { width: 6, height: 4},
        shadowOpacity: 0.7,
        shadowRadius: 100,
        paddingBottom:20, 

    },
    addPost : {
        backgroundColor:'purple',
        borderRadius:30,
        overflow:'hidden',
        elevation: 2, 
        shadowColor: 'purple', 
        shadowOffset: { width: 6, height: 4},
        shadowOpacity: 1,
        shadowRadius: 100,
        paddingBottom:20, 

    },
    imgContainer: {
        height:screenHeight/2.8,
        width: screenWidth/2.5,
        padding:10, 
    },
    img : {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'

    },
    header: {
        color:'white',
        fontSize:25, 
        fontWeight:600, 
        borderBottomWidth:2.5,
        borderBottomColor:COLORS.primary,
        paddingLeft:2,
        paddingRight:2, 
    },
    headerRight: {
        color:'white',
        fontSize:25, 
        fontWeight:600, 
        borderBottomWidth:2.5,
        borderBottomColor:'purple',
        paddingLeft:2,
        paddingRight:2, 
    },
    headerContainer: {
        alignItems:'center',
        padding:10, 
        backgroundColor:'black',

    }





  });

export default styles