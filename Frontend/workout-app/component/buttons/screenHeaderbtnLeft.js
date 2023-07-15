import React from 'react'
import { TouchableOpacity, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import styles from './screenHeaderBtnstyles'

const ScreenHeaderBtnLeft = ({name}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} >
        <Ionicons name="menu" color="white" size={40} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtnLeft