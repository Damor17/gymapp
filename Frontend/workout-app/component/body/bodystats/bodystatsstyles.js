import { StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width
import {COLORS} from '../../../constants'

const styles = StyleSheet.create({

   container: {
    backgroundColor: 'black',
    width: screenWidth /1.2,
    margin: screenWidth/12,
    padding: 30, 
    borderRadius: 20, 
    alignItems:'center',
    justifyContent: 'center',

   },
   itemsContainer : {
    padding:10, 
    flexDirection:'row',
    justifyContent: 'space-between'
   },
   weight: {
    backgroundColor: COLORS.primary,
    padding: 20, 
    paddingTop: 30, 
    paddingBottom: 30, 
    borderRadius: 20, 
    marginRight: 25, 
    alignItems:'center',
    justifyContent:'center',
   },
   logocontainer:{

    borderRadius: 30,
    padding:10, 
   },

   weightText : {
    color: 'white',
    fontSize: 25, 
    fontWeight: 200, 
    marginBottom:10, 
    
   },
   heightAndBPM : {


   },
   heightContainer: {
    backgroundColor: COLORS.primary,
    padding:15, 
    borderRadius: 20, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',

   },
   heightText: {
    color: 'white',
    fontSize: 25, 
    fontWeight: 200, 

   },
   bpmcontainer: {
    backgroundColor: COLORS.primary,
    marginTop: 10, 
    borderRadius: 20, 
    padding: 15, 
    alignItems:'center',

   },
   bpmtext: {
    color: 'white',
    fontSize: 23, 
    fontWeight: 200, 
    marginBottom:5, 


   }


  });

export default styles