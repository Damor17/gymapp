import { StyleSheet, Dimensions} from "react-native";
const screenWidth = Dimensions.get('window').width



const styles = StyleSheet.create({
    imageLayered: {
        position:'relative',

    },
    editicon: {
        backgroundColor:'white',
        position:'absolute',
        left:90, 
        bottom:5, 
        borderRadius:30, 
        padding:5, 

    },
    headerContainter:{
        flexDirection: 'row', 
        width: screenWidth,
        padding: 10, 
        paddingLeft:20, 
        marginBottom:50, 
    },
    imgContainer: {
        width: 120,
        height: 120,
        borderRadius: 90,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    thcontainer: {
        marginLeft: 30,
        flex:1, 
        flexWrap:'wrap',
        justifyContent:'center',
  },
  textHeaderUsername: {
    color:'white',
    fontSize:30,
    flexWrap:'wrap',
    paddingBottom: 15,
    fontWeight: 600,
},
textHeader: {
        color:'white',
        flexDirection:'row',  flexWrap: 'wrap',


    }
  });

export default styles