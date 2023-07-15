import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        backgroundColor:COLORS.primary,
        padding: 20, 
        height:screenHeight,
    },
    contentContainer: {
        backgroundColor:'white',
        padding:30, 
        justifyContent:'center',
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    content: {
        justifyContent:'center',
        flexDirection:'column',
        justifyContent:'space-between'

    },
    header : {
        fontSize:35, 
        fontWeight:800, 
        marginBottom: screenWidth/12
    },
    formContent: {
        flexDirection:'column',
        justifyContent:'space-between'
    },
    formTabs:{
        marginBottom:20,

    },

    formHeaderContainer: {
        borderBottomWidth:2, 
        borderBottomColor: COLORS.primary, 
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        paddingRight:8, 
        marginBottom:10, 
    },
    formHeader: {
        fontSize:16,
        fontWeight:400, 

    },
    formInput: {
        color:'white',
        backgroundColor:COLORS.primary, 
        padding:10, 
        fontSize:14, 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 5, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    bottom: {
        flexDirection:'row',
        justifyContent:'space-between',


    },
    bottomText: {
        alignItems:'center',
        fontSize:12, 
        paddingTop:10, 
        
    },
    signText: {
        color:COLORS.primary,
        fontWeight:600, 
        fontSize:12, 
    },
    buttonSignText: {
        justifyContent:'center',
        paddingLeft:5, 
        marginBottom:-13, 
    },
    animationContainer: {
        alignItems:'center'

    },
    imageContainer: {
        height:screenHeight/3.5,
        width: screenWidth/2,
        borderBottomWidth:4,
        borderBottomColor:COLORS.primary,
        paddingBottom:2, 

    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    animationButtoncontainer: {
        alignItems:'center',
        marginTop:screenHeight/10, 

    },
    animationButton: {
        backgroundColor:COLORS.primary,
        padding:15, 
        borderRadius:25, 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 5, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    animationButtonText: {
        fontSize:20, 
        color:'white',
        fontWeight:900, 


    }


  });

export default styles