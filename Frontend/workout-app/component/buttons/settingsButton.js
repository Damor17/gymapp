import React from 'react'
import { TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import styles from './screenHeaderBtnstyles'

const SettingsButton = ({name, handleModal,
    modalVisible}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => handleModal()} >
        <Ionicons name="menu" color="white" size={40} />
    </TouchableOpacity>
  )
}

export default SettingsButton 