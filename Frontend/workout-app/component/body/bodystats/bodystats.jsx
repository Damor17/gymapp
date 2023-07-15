import { View, TouchableOpacity, Text, TextInput } from "react-native";
import styles from "./bodystatsstyles";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from "react";



const BodyStats = () => {
    const [data, setData] = useState(
        {
            height: '5"7',
            weight: '110',
            bpm: '124',
        }

    )
    const [weight, setWeight] = useState(data.weight)
    const [height, setHeight] = useState('')
    const [bpm, setBpm] = useState('')
    const [change, setChange] = useState(false)
    const [changeheight, setChangeheight] = useState(false)
    const [changebpm, setchangebpm] = useState(false)

    const toggleBlock = () => {
        setChange(!change)
    }
    const toggleBlockhbpm = () => {
        setchangebpm(!changebpm)
    }

    const toggleBlockheight = () => {
        setChangeheight(!changeheight)
    }

    const handleSumbit = ( header, newdata) => {
        const updatedData = { ...data, [header]: newdata };
        setData(updatedData)

        if (header === 'weight') {
            setChange(!change)
        }
        if (header === 'height') {
            setChangeheight(!changeheight)
        }
        if (header === 'bpm') {
            setchangebpm(!changebpm)
        }

        
}

    return (
        <View style={styles.container}>
            <View style={styles.items}>

                <View style={styles.itemsContainer}>

                        {change && (
                            <View style={styles.weight}> 
                                <TextInput
                                value={weight}
                                keyboardType="numeric"
                                maxLength={4} 
                                onChangeText={(text)=> setWeight(text)}
                                style = {{color:'white', fontSize:24, width: 80,  marginBottom:10, }
                            }
                                autoFocus
                                required
                                onBlur={() => handleSumbit('weight', weight)}
                                ></TextInput>
                                <TouchableOpacity style={styles.logocontainer} onPress={() => handleSumbit('weight', weight)}>
                                    <FontAwesome5 name="weight" size={15} color="white" />
                                </TouchableOpacity>
                            </View>
        
                        )}
                        {!change  && (
                            <View style={styles.weight}> 
                                <Text style={styles.weightText}> {data.weight} lbs</Text>
                                <TouchableOpacity style={styles.logocontainer} onPress={toggleBlock}>
                                    <FontAwesome5 name="weight" size={15} color="white" />

                                </TouchableOpacity>
                            </View>


                             

                        )}
                    <View style={styles.heightAndBPM}>

                            {
                                changeheight && (


                                    <View style={styles.heightContainer}> 
                                        <TextInput
                                        value={height}
                                        keyboardType="numeric"
                                        maxLength={2} 
                                        onChangeText={(text)=> setHeight(text)}
                                        style = {{color:'white', fontSize:24, width: 50,  marginBottom:10, }
                                    }
                                        autoFocus
                                        onBlur={() => handleSumbit('height', height)}
                                        ></TextInput>
                                        <TouchableOpacity onPress={() => handleSumbit('height', height)}>
                                            <MaterialCommunityIcons name="human-male-height" size={24} color="white" />

                                        </TouchableOpacity>

                                    </View>
                                )


                            }
                            { !changeheight &&(
                                <View style={styles.heightContainer}>
                                    <Text style={styles.heightText}> {data.height[0]}"{data.height[1]}</Text>
                                    <TouchableOpacity onPress={toggleBlockheight}>
                                        <MaterialCommunityIcons name="human-male-height" size={24} color="white" />

                                    </TouchableOpacity>
                                </View>


                            )}


                            {changebpm &&(

                                <View style={styles.bpmcontainer}>
                                    <TextInput
                                    value={bpm}
                                    keyboardType="numeric"
                                    maxLength={3} 
                                    onChangeText={(text)=> setBpm(text)}
                                    style = {{color:'white', fontSize:24, width: 50,  marginBottom:10, }
                                }
                                    autoFocus
                                    onBlur={() => handleSumbit('bpm', bpm)}
                                    ></TextInput>
                                    <TouchableOpacity onPress={() => handleSumbit('bpm', bpm)}>
                                        <FontAwesome5 name="heartbeat" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>

                            )}
                            {!changebpm && (
                                <View style={styles.bpmcontainer}>
                                    <Text style={styles.bpmtext}>{data.bpm} BPM</Text>
                                    <TouchableOpacity onPress={toggleBlockhbpm}>
                                        <FontAwesome5 name="heartbeat" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>


                            )}


                    </View>
                    
                </View>
            </View>


        </View>
    )
}

export default BodyStats