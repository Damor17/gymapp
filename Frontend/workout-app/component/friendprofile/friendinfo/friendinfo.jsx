import { View, Text, Image, Modal } from "react-native";
import FlipCard from 'react-native-flip-card'

import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./friendinfostyles";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



const FriendInfo = ({ setModalInfo, modal, setModal, friend}) => {
    const handlePress = (type) => {
        setModal(!modal)
        setModalInfo(type)
    }

    return (
        // <View style={styles.container}>
        //     <View style={styles.imgcontainer}>
        //         <Image 
        //         style={styles.img}
        //         source = {{uri: friend.profilepic}}
        //         />

        //     </View>
        //     <View style={styles.txtcontainer}>
        //             <Text style={styles.txtusername}> {friend.username}</Text>
        //             <Text style={styles.txtbio}>{friend.biography}</Text>

        //             <View style={styles.icons}>
        //                 <TouchableOpacity>
        //                     <MaterialIcons name="message" size={25} color="white" />

        //                 </TouchableOpacity>
        //                 <TouchableOpacity>
        //                     <Ionicons name="notifications" size={25} color="white" />
        //                 </TouchableOpacity>
        //                 <TouchableOpacity>
        //                     <AntDesign name="heart" size={25} color="white" />
        //                 </TouchableOpacity>
        //             </View>
                    

        //         </View>

        // </View>
        <FlipCard style={styles.flipCard}>
            <LinearGradient 

            colors={["purple", '#000000' ]}
            start={{x:0, y:0}}
            end={{x:1, y:0.5}}
            
            style={styles.frontSide}>
                 <View style={styles.frontsideLayout}>
                    <View style={styles.frontSideLeft}>
                        <View style={styles.basicInfoContainer}>
                            <View style={styles.imgContainer}>
                                <Image source={{uri:friend.profilepic}} style={styles.img} />
                            </View>

                            <View style={{alignItems:'center', justifyContent:'center', paddingLeft:10, paddingRight:10,  
                            
                            }}>

                                <View style={{borderBottomColor:'purple', padding:1, borderBottomWidth:1.5}}>
                                    <Text 
                                numberOfLines={1}ellipsizeMode="tail" style={styles.basicUsername}>
                                {friend.username}
                                </Text>

                                </View>
                            

                                
                            
                            </View>
                        </View>

                        <View style={styles.frontbioContainer}>
                            <View style={{borderBottomColor:'purple', borderBottomWidth:1.5, marginBottom:8, }}>
                                <Text style={styles.frontBioHeaderText}>Biography:</Text>
                            </View>
                            <Text style={styles.frontBioHeaderParagraph}>{friend.biography}</Text>

                        </View>


                    </View>
                    <View style={styles.frontSideRight}>
                        <TouchableOpacity onPress={() => handlePress('Achievements')} style={styles.frontSideBtn}>
                            <FontAwesome5 name="medal" size={25} color='purple' />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => handlePress('Logs')} style={styles.frontSideBtn}>
                            <FontAwesome name="list" size={26} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress('Friends')} style={styles.frontSideBtn}>
                            <FontAwesome5 name="user-friends" size={25} color='purple'/>
                        </TouchableOpacity>

                    </View>

                </View>

            </LinearGradient>
            <LinearGradient 
             colors={["purple", '#000000' ]}
             start={{x:0, y:0}}
             end={{x:1, y:0.5}}
            style={styles.backSide}>
                <View style={styles.backSideLayout}> 
                    <View style={styles.backsideTop}>
                        <View style={styles.currentPRContainer}>
                            <View>
                                <View style={{borderBottomColor:'purple', padding:2, borderBottomWidth:1,   flexWrap: 'wrap',
                            alignSelf: 'flex-start'}}>
                                    <Text style={styles.prHeader}>Current PR:</Text>

                            </View>
                            </View>
        
                            <Text style={styles.prtext}>225 Bench Press</Text>
                        </View>
                        <View style={styles.quoteContainer}>
                            <View>
                                <View style={{borderBottomColor:'purple', padding:2, borderBottomWidth:1,   flexWrap: 'wrap',
                            alignSelf: 'flex-start'}}>
                                    <Text style={styles.quoteHeader}>Quote:</Text>

                                </View>
                            </View>
        
                            <Text style={styles.quoteText}>'Always love yourself please darling or else'</Text>
                            
                        </View>

                    </View>
                    <View style={styles.backsideBottom}>
                        <View style={styles.friendsContainer}>
                            <View style={{justifyContent:"center",padding:5, }}>

                            
                            <View style={{borderBottomEndRadius:210, borderBottomWidth:5, borderBottomColor:'purple',}}>
                                <Text style={styles.friendsHeader}>
                                Song
                            </Text>
                            </View>

                            </View>
                            <View style={{flexDirection:'row'}}>

                                
                                
                            </View>
                        
                        </View>

                    </View>
                </View>
                
            </LinearGradient>
        </FlipCard>
    )
}
export default FriendInfo