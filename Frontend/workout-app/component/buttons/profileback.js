import React from 'react'
import { TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import styles from './screenHeaderBtnstyles'
import { useRouter } from 'expo-router';

const ProfileBack = ({place}) => {
    const router = useRouter()

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => router.push(place)} >
        <Ionicons name="arrow-back" color="white" size={40} />
    </TouchableOpacity>
  )
}

export default ProfileBack