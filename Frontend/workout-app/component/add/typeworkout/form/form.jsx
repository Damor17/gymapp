import { View, TouchableOpacity, TextInput, Text} from "react-native";
import { useState } from "react";
import styles from "./formStyles";
import { Ionicons } from '@expo/vector-icons'; 
import {COLORS} from '../../../../constants'
import ExcersiseCard from "./excersise card/excersiseCard";



const initialStateForm = {
    excersise: '',
    SetNReps : [
       
    ]
}

const emptyStats = {
    sets: 0,
    reps:0, 
    weight:0, 

}



const WorkoutForm = ({data, setData}) => {
    const [add, setAdd] = useState(false)
    const [addInfo, setAddInfo] = useState(false)
    const [form, setForm] = useState(initialStateForm) // form includes excersise name and weights n stuff
    const [nums, setNums] = useState([]) // an array of all stats
    const [stats, setStats] = useState(emptyStats) //just an instance of stats(sets, reps, weight)


    const handleChange =(text, section) => {
        setForm({... form, [section]: text})
        console.log(form)
    }

    const handleNums = (text, section) => {
        setStats({...stats, [section]: text})
    }

    const handleAddToNums = () => {
        setNums((nums) => [...nums, stats])
        setStats(emptyStats)
        
        setForm((prevForm) => ({
            ...prevForm,
            SetNReps: [...prevForm.SetNReps, stats],
          }));
        setAddInfo(!addInfo)

    }
    
    const handleAdd = () => {
        setData((data) => [...data, form])
        setAdd(!add)
        setNums([])
        setForm(initialStateForm)
    }

    console.log(data)


    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}> 
            {data.map((object,index) => (
                <ExcersiseCard data={data} setData={setData} object={object} index={index} add ={add} setAdd={setAdd} 
                key={index} />

            ))}
            </View>

            {add ? (
                <>
                    <View style={styles.addcontainer}> 
                        <View> 
                            <TextInput onChangeText={(text) => handleChange(text, 'excersise')}
                            placeholder="Add Excersise" style={styles.headerTextInput} />
                        </View>
                        <View style={styles.addBody}>


                            {nums.map((obj, idx) => (

                                <View key={idx} style={styles.addSNRcontainer}> 
                                    <View style={styles.addSNRinfocontainer}>
                                        <Text style={styles.addSNRheader}>
                                            Sets
                                        </Text>
                                        <Text style={styles.numberfr}>
                                            {obj.sets}
                                        </Text>
                                        
                                    </View>
                                    <View style={styles.addSNRinfocontainer}>
                                        <Text style={styles.addSNRheader}>
                                            Reps
                                        </Text>
                                        <Text style={styles.numberfr}>
                                            {obj.reps}
                                        </Text>
                                        

                                    </View>
                                    <View style={styles.addSNRinfocontainer}>
                                        <Text style={styles.addSNRheader}>
                                            Weight
                                        </Text>
                                        <Text style={styles.numberfr}>
                                            {obj.weight}
                                        </Text>
                                    

                                    </View>

                                </View>


                            ))}

                            {addInfo ? (
                                <>
                                <View style={styles.addSNRcontainer}> 
                                    <View style={styles.addSNRinfocontainer}>
                                        <Text style={styles.addSNRheader}>
                                            Sets
                                        </Text>
                                        <TextInput onChangeText={(text) => handleNums(text, 'sets')} keyboardType="numeric" placeholder='0'
                                        style={styles.addSNRText}  />
                                    </View>
                                    <View style={styles.addSNRinfocontainer}>
                                        <Text style={styles.addSNRheader}>
                                            Reps
                                        </Text>
                                        <TextInput  onChangeText={(text) => handleNums(text, 'reps')}  keyboardType="numeric" placeholder='0'
                                        style={styles.addSNRText}  />

                                    </View>
                                    <View style={styles.addSNRinfocontainer}>
                                        <Text style={styles.addSNRheader}>
                                            Weight
                                        </Text>
                                        <TextInput  onChangeText={(text) => handleNums(text, 'weight')}  keyboardType="numeric" placeholder='0'
                                        style={styles.addSNRText}  />

                                    </View>

                                </View>


                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity onPress={() => handleAddToNums()} style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", padding:7, backgroundColor:COLORS.primary, borderRadius:20, }}>
                                        <Text style={{color:'white', padding:5, }}> Add Set N Reps</Text>
                                        <Ionicons name="add-circle" size={20} color="white" />
                                    </TouchableOpacity>
                                </View>

                                </>
                                

                            ): (
                                <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={() => setAddInfo(!addInfo)} style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", padding:7, backgroundColor:COLORS.primary, borderRadius:20, }}>
                                    <Ionicons name="add-circle" size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                            )}



                        </View>

                    </View>
                    <TouchableOpacity onPress={() => handleAdd()}
                style={styles.btn}>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.btnText}> Add New Excersise</Text>
                    </View>
                    <Ionicons name="add-circle" size={32} color="white" />
                </TouchableOpacity>

                </>
                

            ) : (
 
                <TouchableOpacity onPress={() => setAdd(!add)}
            style={styles.btn}>
                
                <Ionicons name="add-circle" size={32} color="white" />
            </TouchableOpacity>
            )
            }

        
        </View>
            
    )
}
export default WorkoutForm