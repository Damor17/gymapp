import { Logs } from "expo";
import { View, Text, ActivityIndicator, ScrollView} from "react-native";



const LogsView = ({modalInformation}) => {

    return (

        <View style={{backgroundColor:'black', borderRadius:20, padding:10,  }}>

            <View style={{alignItems:'center', borderBottomColor:'purple', padding:2, borderBottomWidth:2, paddingBottom:5.  }}>
                <View >
                    <Text style={{color:'white', fontSize:26,}}>Logs</Text>
                </View>
            </View>

            <ScrollView >
                {modalInformation.map((log, index) => (
                <View  key={index} style={{padding:10, }}>


                    <View> 
                        <View style ={{borderBottomColor:'purple', borderBottomWidth:1, flexWrap: 'wrap', alignSelf: 'flex-start', padding:2, }}>
                            <Text style={{color:'white', fontSize:20, }}>{log.date}</Text>
                        </View>  
                    </View>


                    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}> 
                        <View style={{width:100}}>
                            <Text style={{color:'white'}}>{log.excersise}</Text>
                        </View>

                            <ScrollView 
                            showsHorizontalScrollIndicator={false}
                            horizontal>
                                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

                        

                                    {log.SetNReps.map((obj, index)=> (
                                    <View style={{flexDirection:'row',}} key={index}>
                                        <View style={{alignItems:'center',marginLeft:42}}>
                                            <View style={{borderBottomColor:'purple', borderBottomWidth:1.5}}>
                                                <Text style={{color:'white'}}> Sets</Text>

                                            </View>
                                            <Text style={{color:'white', marginTop:5, }}>
                                            {obj.sets}
                                        </Text>
                                        </View>
                                        <View style={{alignItems:'center',marginLeft:14}}>
                                            <View style={{borderBottomColor:'purple', borderBottomWidth:1.5}}>
                                                <Text style={{color:'white'}}> Reps</Text>

                                            </View>
                                            <Text style={{color:'white', marginTop:5, }}>
                                            {obj.reps}
                                        </Text>
                                        </View>
                                        <View style={{alignItems:'center', marginLeft:14}}>
                                            <View style={{borderBottomColor:'purple', borderBottomWidth:1.5}}>
                                                <Text style={{color:'white'}}> Weight</Text>

                                            </View>
                                            <Text style={{color:'white', marginTop:5, }}>
                                            {`${obj.weight} lbs`}
                                        </Text>
                                        </View>

                                        </View>

                                    
                                    ))}

                                </View>
                            </ScrollView>    
                    </View>


                </View>
                ))}

            </ScrollView>

        </View>
    )
}

export default LogsView