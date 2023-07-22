import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
    flipCard: {
        marginLeft:5, 
        marginRight:5, 
        borderRadius:20, 
        marginBottom:40, 
        flex:1, 

    },
    frontSide: {
        padding:10, 
        borderRadius:20, 
        justifyContent:'space-between',
        flex:1, 

    },
    backSide: {
        borderRadius:20, 
        padding:20, 
        flex:1, 
    },
    
    frontsideLayout: {
        flexDirection:'row', 
        padding:10, 
        flex:1, 
        borderRadius:20, 
    },
    frontSideLeft: {
        flex:'60%',
        position:'relative'

    },
    basicInfoContainer: {
        backgroundColor:'black',
        flexDirection:'row',
        padding:15, 
        borderRadius:20, 


    },
    basicUsername: {
        color:'white',
        fontSize:13, 
        flexWrap: 'wrap'

    },
    imgContainer: {
        width:70,
        height:70, 
        borderRadius:50, 
        overflow:'hidden'

    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'

    },

    frontSideRight: {
        flex:'30%',
        justifyContent:'space-between'

    },
    frontSideBtn: {
        backgroundColor:'black',
        marginLeft:20,
        marginBottom:10, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        height:60
    },

    frontbioContainer: {
        backgroundColor:'black',
        flex:1, 
        marginTop:15, 
        borderRadius:20, 
        padding:12, 

    },
    frontBioHeaderText: {
        color:'white',
        fontSize:15,
        paddingBottom:3, 


    },
    frontBioHeaderParagraph: {
        color:'white',
        fontSize:10, 

    },
    backSideLayout: {
        flex:1, 
        borderRadius:20, 
    },
    backsideTop: {
        flexDirection:'row',

    },
    backsideBottom: {

    },
    currentPRContainer: {
        backgroundColor:'black',
        padding:15, 
        borderRadius:20, 
        flex:'40%',
        alignItems:'center',
        justifyContent:'center'

    },
    prHeader: {
        color:'white',
        fontSize:11, 
        alignSelf:'center'

    },
    prtext: {
        color:'white',
        alignSelf:'center',
        marginTop:6, 
        fontSize:10, 

    },
    quoteContainer: {
        flex:"60%",
        backgroundColor:'black',
        marginLeft:20, 
        borderRadius:20,
        padding:10, 
        alignItems:'center'


    },
    quoteHeader: {
        color:'white',
        fontSize:12, 

    },
    quoteText: {
        color:'white',
        fontSize:10, 
        alignSelf:'center',
        marginTop:5, 

    },
    friendsContainer: {
        backgroundColor:'black',
        marginTop:20, 
        flex:1, 
        borderRadius:20, 
    },
    friendsHeader: {
        padding:10, 
        paddingBottom:7, 
        color:'white',
        fontSize:18,
        
    }




  });

export default styles