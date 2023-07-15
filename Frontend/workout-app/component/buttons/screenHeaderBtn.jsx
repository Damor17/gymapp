import React from 'react'
import { TouchableOpacity, Image} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './screenHeaderBtnstyles'

const ScreenHeaderBtn = ({user, dimension}) => {
  const router = useRouter()
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => router.push(`/profile/${user.id}`)}>
      <Image
        source = {{uri: user.profilepic}}
        resizeMode='contain'
        style = {styles.btnImg(dimension)}
       />

    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn