import FlipCard from 'react-native-flip-card'
import { View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import styles from './cardInfoStyles'
import { LinearGradient } from 'expo-linear-gradient'
import {COLORS} from '../../../constants'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';  

import { useRouter } from 'expo-router'
import FriendActiveCard from '../../cards/FriendActive/friendActiveCard'
import { useState } from 'react'


const LiftCard = ({user}) => {
    const router = useRouter()

    const [data, setData] =  useState([
        {
            id: 1,
            username: 'Mr.Beans',
            active: false, 
            image: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f"
        },
        {
            id: 2,
            username: 'SHinyMan',
            active: true, 
            image: 'https://images.hdqwalls.com/download/anime-tokyo-ghoul-kaneki-ken-by-2048x2048.jpg'
        },
        {
            id: 3,
            username: 'Thebesterlolste',
            active: false, 
            image: "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f"
        },
        



    ])

    return (
        <FlipCard 
        friction={20}
        perspective={1000}
        style={styles.flipCard}>
            <LinearGradient 
            colors={[COLORS.primary, '#000000' ]}
            start={{x:0, y:0}}
            end={{x:1, y:0.5}}
            style={styles.frontSide}>
                <View style={styles.frontsideLayout}>
                    <View style={styles.frontSideLeft}>
                        <View style={styles.basicInfoContainer}>
                            <View style={styles.imgContainer}>
                                <Image source={{uri:user.profilepic}} style={styles.img} />
                            </View>

                            <View style={{alignItems:'center', justifyContent:'center', paddingLeft:10, paddingRight:10,   
                            }}>
                                <View style={{borderBottomColor:COLORS.primary, borderBottomWidth:1, paddingBottom:2, }}>
                                <Text style={styles.basicUsername}>
                                {user.username}
                                </Text>

                                </View>
                            
                            </View>
                        </View>

                        <View style={styles.frontbioContainer}>
                            <View style={{borderBottomColor:COLORS.primary, borderBottomWidth:1.5, marginBottom:20, }}>
                                <Text style={styles.frontBioHeaderText}>Biography:</Text>

                            </View>
        
                            <Text style={styles.frontBioHeaderParagraph}>{user.biography}</Text>

                        </View>


                    </View>
                    <View style={styles.frontSideRight}>
                        <TouchableOpacity style={styles.frontSideBtn}>
                            <FontAwesome5 name="medal" size={36} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.frontSideBtn}>
                            <FontAwesome name="list" size={38} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.frontSideBtn}>
                            <FontAwesome5 name="user-friends" size={36} color={COLORS.primary}/>
                        </TouchableOpacity>

                    </View>

                </View>

            </LinearGradient>

            <LinearGradient 
            colors={[COLORS.primary, '#000000' ]}
            start={{x:0, y:0}}
            end={{x:1, y:0.5}}
            style={styles.backSide}>
                <View style={styles.backSideLayout}> 
                    <View style={styles.backsideTop}>
                        <View style={styles.currentPRContainer}>
                            <View>
                                <View style={{borderBottomColor:COLORS.primary, padding:2, borderBottomWidth:1,   flexWrap: 'wrap',
                            alignSelf: 'flex-start'}}>
                                    <Text style={styles.prHeader}>Current PR:</Text>

                            </View>
                            </View>
        
                            <Text style={styles.prtext}>225 Bench Press</Text>
                        </View>
                        <View style={styles.quoteContainer}>
                            <View>
                                <View style={{borderBottomColor:COLORS.primary, padding:2, borderBottomWidth:1,   flexWrap: 'wrap',
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

                            
                            <View style={{borderBottomEndRadius:210, borderBottomWidth:5, borderBottomColor:COLORS.primary,}}>
                                <Text style={styles.friendsHeader}>
                                Song
                            </Text>
                            </View>

                            </View>
                            <View style={{flexDirection:'row'}}>

                                {data.map((item, index) => (
                                    
                                    <FriendActiveCard 
                                    item = {item}
                                    key={index}
                                />
                                ))}
                                
                            </View>
                        
                        </View>

                    </View>
                </View>

            </LinearGradient>

        </FlipCard>
    )
}

export default LiftCard