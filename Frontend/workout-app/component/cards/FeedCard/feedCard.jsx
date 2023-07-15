import { Text, View, Image, TouchableOpacity} from "react-native"
import styles from "./feedcardstyles"
import { useState } from "react"

const FeedCard = ({item}) => {
    const [expanded, setExpanded] = useState(false)

    const toggleBlock = () => {
        setExpanded(!expanded)
    }
    


    return (
        <View style={{borderBottomColor: 'darkgrey',
        borderBottomWidth: 3,}} >
            <View style={styles.topimage}>
                <Image style={styles.profilepic}
                source={{uri: item.profilePic}}
                resizeMode='contain'
                />
                <Text style={styles.textcolor}>{item.username}</Text>
            </View>
            <Image 
                style={styles.mainImage}
                source={{uri: item.image}}


            />
            <View style={styles.bottomImage}>
                {expanded && (
                    <>
                        <Text style={styles.captionText}>{item.caption}</Text>
                        <TouchableOpacity style={styles.captionButtonClose} onPress={toggleBlock}>
                            <Text style={styles.captionRightClose}>Hide </Text>
                        </TouchableOpacity>

                        
                    </>
                )}
                {!expanded && (
                    <>
                        <Text style={styles.captionText}>{(item.caption).length <= 25
                        ? item.caption 
                        : `${(item.caption).slice(0,26)}...`
                    
                    
                        }</Text>

                        <TouchableOpacity style={styles.captionButton} onPress={toggleBlock}>
                            <Text style={styles.captionRight}> Show More</Text>
                        </TouchableOpacity>
                    </>
                    
                    
                )}
            </View>
            <View style={styles.descriptionNStuff}>
                    {expanded && (
                        <Text style ={styles.textcolor}>
                            {item.description}
                        </Text>
                    )}

            </View>

        </View>

    )
}
export default FeedCard