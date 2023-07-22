import { View, Text, Modal, ActivityIndicator} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import LogsView from "./logs/logs";
import FriendsView from "./friends/friends";
import AchievementsView from "./achievements/achieve";


const SelectInfo = ({friend, modalInfo, modal, setModal}) => {

    let modalInformation = 'yur'


    if (modalInfo === 'Friends') {
        modalInformation = friend.friends
    }
    else if (modalInfo === 'Logs') {
        modalInformation = friend.logs
    }
    else if (modalInfo === 'Achievements') {
        modalInformation = friend.achievements
    }
    

    console.log(modalInformation)



    return (
        <Modal visible={modal} transparent animation="slide">
            <View style={{ flex:1, justifyContent: 'center',
            alignItems: 'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
                <View style={{backgroundColor:'purple', padding:15, width:'90%', borderRadius:20,}}>
                    <View style={{paddingBottom:15, }}>
                        <AntDesign name="close" size={28} color="black" onPress={() => setModal(!modal)} />
                    </View>
                    <View>
                        {modalInfo === 'Friends'? (
                            <View>
                            <FriendsView modalInformation={modalInformation} />
                        </View>

                        ) : modalInfo === 'Logs' ? (
                            <LogsView modalInformation={modalInformation}/>

                        ) : modalInfo === 'Achievements'? (
                            <AchievementsView  modalInformation={modalInformation}/>

                        ): (
                            <View>
                                <Text>Must Be Unavialable</Text>
                            </View>
                        )}

                    </View>
                    

                </View>
            </View>
    
        </Modal>

    )
}

export default SelectInfo
