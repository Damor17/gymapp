import { StyleSheet, Dimensions} from "react-native"
import {COLORS} from '../../../../../constants'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        borderRadius:20, 
        padding:15,
        backgroundColor:COLORS.primary
    },
    textHeader: {
        color:'white', fontSize:22, 
        flexWrap:"wrap", 
        fontWeight:500, 
        padding:10,

    },
    headerContainer: {
        alignSelf: 'flex-start',
        padding:3, 
        borderRadius:20,
        elevation: 2, 
        backgroundColor:'black',
        shadowColor: 'white', 
        shadowOffset: { width: 2.5, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,

    },
    excersiseHeaderContainer: {
        borderBottomWidth:2, 
        borderBottomColor: COLORS.primary, 
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
    },
    excersiseHeaderText: {
        color:'white',
        fontSize:15,
    },
    excersiseContainer: {
        elevation: 2, 
        shadowColor: 'white', 
        shadowOffset: { width: 2.5, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius:20,
        padding:10, 
        backgroundColor:'black',
        marginBottom:10,
    },
    listContainer: {
        backgroundColor:COLORS.primary,
        padding:5,
        borderRadius:20, 
        justifyContent:'space-between'
    },
    infoContainer: {
        flexDirection:'row',
        backgroundColor:COLORS.primary,
        borderRadius:20,
        marginTop:10,
        padding:10, 
        justifyContent:'space-evenly'
    },
    categoryContainer: {

        padding:10, 
        backgroundColor:'black',
        borderRadius:20,
        alignItems:'center',
    
    },
    categoryHeader: {
        color:'white',


    },
    categoryText: {
        marginTop:5, 
        color:'white',
        fontSize:11,
    },
    bottom : {
        marginTop:20,

    },
    stepsContainer: {
        padding:10, 
        flex:'40%',
        alignItems:'center'

    },
    stepsHeader: {
        marginBottom:10,
    },
    stepText: {
        color:'blue',
        fontSize:20, 
    },
    actualsteps: {
        backgroundColor:COLORS.primary, 
        borderRadius:20, 
        padding:10, 
    },
    stepContainer: {
        flexDirection:'row',
        alignItems:'center',
        padding:8, 

    },
    stepIndex: {
        color:'white',
        marginRight:10, 
        fontSize:12,

    }, 
    stepText: {
        color:'white',
        fontSize:10,

    },
    videoContainer: {
        backgroundColor:'white'
    },
    buttons: {
        backgroundColor:'blue'

    }

    

  });

export default styles