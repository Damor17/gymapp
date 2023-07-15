import { StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width

import {COLORS, SIZES} from '../../../constants'

const styles = StyleSheet.create({

    topimage: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    profilepic: {
        height:30,
        width:30,
        borderRadius:20,
        margin: 15,
        backgroundColor: 'white'

    },
    mainImage : {
        height:600,
        width:screenWidth,

    },
    bottomImage: {
        paddingTop: 15,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent:'space-between',

    },

    textcolor : {
        color:'white'
    },
    captionText : {
        color:'white',
        paddingLeft: 10,
        fontWeight: 600,
        fontSize: 17,
    },
    captionRight : {
        color:'black',
        fontWeight: 600,
        fontSize: 13,
    },
    captionButton: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 20,
        marginRight: 10,

    },
    captionButtonClose : {
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 2,
        borderColor: "white",

    },
    captionRightClose : {
        color:'white',
        fontWeight: 600,
        fontSize: 13,
    },
    descriptionNStuff : {
        backgroundColor: 'black',
        width: screenWidth,
        padding: 10,
        paddingTop:15,
        paddingBottom:15,
    },


  });

export default styles