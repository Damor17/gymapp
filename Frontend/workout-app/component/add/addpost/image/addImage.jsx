import { View, TouchableOpacity, Image, Text} from "react-native";
import styles from "./addImageStyles";
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker'


const AddImage = ({handleChange}) => {
    const [hasGalleryPerm, setHasGalleryPerm] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        (async() => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
            setHasGalleryPerm(galleryStatus.status === 'granted')
        })()
    }, [])


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
            handleChange('image', result.assets[0].uri )


        }
    }
    if (hasGalleryPerm === false) {
        return <Text>No access to Internal Storage</Text>
    }


    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <TouchableOpacity
                style={styles.btn}
                onPress={() => pickImage()}
                >
                    <Text style={{fontSize:16, color:'white', fontWeight:500, }}>
                        Pick Image
                    </Text>
                </TouchableOpacity>
                {image ? (
                    <View style={styles.imgContainer}>
                        <Image style={styles.img}
                        source={{uri:image}} />
                    </View>
    
                ): (
                    <View style={styles.imgContainer}>
                        <Text style={{color:'white', fontSize:20, }}>
                            No Image Selected
                        </Text>
                    </View>
                )}

            </View>
        </View>

    )
}
export default AddImage