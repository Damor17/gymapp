import { StyleSheet, Dimensions} from "react-native";
import { COLORS } from "../../../../../constants";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 40, 
        marginTop:30,
        marginBottom: 30, 
    },
    logoContainer: {
        backgroundColor: 'purple',
        padding: 5,
        borderRadius: 10, 
        borderWidth: 'white',
        borderWidth: 1, 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 5, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,

    },
    headerTextContainer: {
        flex:1,
        padding: 5, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10, 
        alignItems:'center',

    },
    headerText: {
        color: 'white',
        fontSize: 25, 
        fontWeight: 100, 
        
        
    },
    mapContainer: {
        backgroundColor: 'rgb(251, 232, 213)',
        borderRadius: 50, 
        padding: 20, 
        marginTop:10, 

    },
    mapHeader : {
        borderRadius: 20, 
        margin: 5, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10, 
        justifyContent:'space-between'

    },

    mapText: {
        color: 'white',
        padding: 10,
        fontWeight:200, 
    },
    editmap: {
        flexDirection:'row',
        alignItems:'center'
    },
    addmore: {
        alignItems:'center',
        backgroundColor:'purple',
        borderRadius:30,
        padding:10, 
        width: screenWidth/3,
    },
    addmoretext: {
        color:'white'

    },
    nogoals: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    middle :{
        marginTop: 10, 
        alignItems:'center'
    },
    textinput: {
        backgroundColor:'purple',
        borderRadius:20, 
        justifyContent:'center',
        padding:10, 
    },
    addButton: {
        backgroundColor:"rgb(94, 41, 112)",
        alignItems:'center',
        borderRadius:30,
        padding:10, 
        width: screenWidth/3,
    },
    editicon: {
        justifyContent:'center',
        padding: 10

    },
  });

export default styles