import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        borderRadius:20,
        padding:20,
    },
    headerContainer: {

    },
    headerText: {
        color:'white',
        fontSize:23
    },
    imageContainer: {
        width:60,
        height:60,
        overflow:'hidden',
        backgroundColor:'white',
        borderRadius:50, 

    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'

    },
    textContainer: {
        alignItems:'center', 
        justifyContent:'center',
        marginLeft:20, 
        backgroundColor:'black',
        borderRadius:20,
        paddingLeft:8, 
        paddingRight:8, 


    },
    textName: {
        color:'white',
        fontSize:18,

    },
    friendContainer: {
        flexDirection:'row',
        backgroundColor:'black',
        padding:10, 
        borderRadius:20, 
        marginBottom:12, 
        
    }
    

  });

export default styles