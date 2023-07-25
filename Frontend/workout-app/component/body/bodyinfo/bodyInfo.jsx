import { View, Text, TouchableOpacity} from "react-native";
import styles from "./bodyinfoStyles";
import { useState } from "react";
import {COLORS} from '../../../constants'
import ProgressGraph from "./progressGraph/progressGraph";
import LogsView from "../../friendprofile/selectedinfo/logs/logs";
import { AntDesign } from '@expo/vector-icons'; 


const BodyInfo = ({user}) => {
    const [logView, setLogView] = useState(true)


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setLogView(!logView)} style={styles.headerContainer}>
                <TouchableOpacity onPress={() => setLogView(!logView)} style= {styles.headerTextContainer}>
                    <Text style={styles.headerText}>
                        {!logView ? 'Switch To Logs' : 'Switch To Progress'}
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
            {!logView ? (
                <ProgressGraph />

            ): (
                <LogsView modalInformation={user.logs} color={COLORS.primary}/>
            )}


        </View>
    )
}

export default BodyInfo 