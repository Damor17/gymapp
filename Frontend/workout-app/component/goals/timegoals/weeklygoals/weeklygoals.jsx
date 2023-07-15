import { View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./weeklygoalsstyles";
import { AntDesign } from '@expo/vector-icons'; 
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../../../constants";


const WeeklyGoals = () => {
    const router = useRouter()
    const targeted = null
    const [weeklygoals, setweeklygoals] = useState( [['Be Leaner'],
    ['Be Stronger'], 
    ['Start training more'],
    ['Be Him']])

    const [newGoal, setNewgoal] = useState('')
    const [edit, setEdit] = useState(false)
    const [editGoal, setEditGoal] = useState(false)
    const [add, setAdd] = useState(false)
    const [createGoal, setCreateGoal] = useState('')

    const toggleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete =(id) => {
        const wgoals = weeklygoals.filter((_, idx) => idx !== id)

        setweeklygoals(wgoals)
        
    }
    const handleAdd = () => {
        const newGoal = [createGoal]
        setweeklygoals((weeklygoals) => [...weeklygoals, newGoal])

        setAdd(!add)
        setCreateGoal('')

    }
    const toggleEditGoal = (key) => {
        const targeted = key
        setEditGoal(!editGoal)
    }



    return (
        <LinearGradient style={styles.container}
        colors={['rgb(188, 36, 150)', '#000000' ]}
        start={{x:1, y:0}}
        end={{x:.5, y:.9}}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}> Weekly Goals: </Text>
                <TouchableOpacity style ={styles.logoContainer}
                onPress={toggleEdit}
                >
                    <AntDesign name="edit" size={25} color="rgb(251, 232, 213)" />
                </TouchableOpacity>
            </View>
            {weeklygoals.length === 0 ? (
                <View style={styles.mapContainer}>
                {add? (
                    (
                        <>
                            <View style={styles.textinput}>
                                <TextInput
                                    placeholder={createGoal}
                                    value= {createGoal}
                                    onChangeText={(text)=> setCreateGoal(text)}
                                    style = {{color:'white', fontSize:14,  
                                }
                                }
                                    autoFocus
                                    
                                />
                             </View>

                            <View style={styles.middle}>
                                <TouchableOpacity style={styles.addButton} onPress={() => handleAdd()}>
                                    <Text style={styles.addmoretext}>Add Goal </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )

                ) : (
                    <View style={styles.nogoals}>
                    <Text>Theres No Monthly Goals</Text>
                    <TouchableOpacity style={styles.addmore} onPress={() => setAdd(!add)}>
                            <Text style={styles.addmoretext}>Add More</Text>
                    </TouchableOpacity>

                </View>

                )}

            </View>

            )
            : edit & weeklygoals.length> 0 ? (
                    <View style={styles.mapContainer}>
                    {weeklygoals.map((goal, index) => (


                        <LinearGradient 
                        colors={['rgb(188, 36, 150)', '#000000' ]}
                        start={{x:0.05, y:0.5}}
                        end={{x:.2, y:.6}}
                        style={styles.mapHeader} key={index}>
                            <View style={styles.editmap} key={index} >
                                <TouchableOpacity onPress={() => handleDelete(index)} >
                                    <MaterialIcons name="delete" size={24} color="white" />
                                </TouchableOpacity>

                                {editGoal && index===targeted ? (
                                    <Text>lolski</Text>

                                ): (
                                    <Text style={styles.mapText}>{goal}</Text>

                                )}

                            </View>
                            <View style={styles.editicon}> 
                                <TouchableOpacity 
                                onPress={() => toggleEditGoal(index)}
                                >
                                    <FontAwesome name="edit" size={22} color="white" />
                                </TouchableOpacity>

                            </View>
                        </LinearGradient>
                    ))}
                    {add ? (
                        <>
                            <View style={styles.textinput}>
                                <TextInput
                                    placeholder={createGoal}
                                    value= {createGoal}
                                    onChangeText={(text)=> setCreateGoal(text)}
                                    style = {{color:'white', fontSize:14,  
                                }
                                }
                                    autoFocus
                                   
                                />
                             </View>

                            <View style={styles.middle}>
                                <TouchableOpacity style={styles.addButton} onPress={() => handleAdd()}>
                                    <Text style={styles.addmoretext}>Add Goal </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                    : (
                        <View style={styles.middle}>
                            <TouchableOpacity style={styles.addmore} onPress={() => setAdd(!add)}>
                                <Text style={styles.addmoretext}>Add More</Text>
                            </TouchableOpacity>
                        </View>
                    )
                        }
                    </View>

            ): (
                <>
                    <View style={styles.mapContainer}>

                        {weeklygoals.map((goal, index) => (
                            <LinearGradient 
                            colors={['rgb(188, 36, 150)', '#000000' ]}
                            start={{x:0, y:0}}
                            end={{x:1, y:0.5}}
                            style ={styles.mapHeader} key={index}>
                                <Text style={styles.mapText}>{goal}</Text>
                            </LinearGradient>
                    ))}
                    </View>
                </>
            )}
        </LinearGradient>
    )
}
export default WeeklyGoals