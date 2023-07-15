import styles from "./friendfeedstyles";
import { View, Text, FlatList} from "react-native";
import FeedCard from "../../cards/FeedCard/feedCard";

const FriendFeed = ({friend}) => {
    return (
        <>
            {friend.posts.length === 0 ? (
                <View style={styles.container}>
                    <View style={styles.colored}>
                        <Text style={styles.texter}> No Posts</Text>

                    </View>
                </View>

            ): (
                <FlatList 
             data = {friend.posts}
             renderItem={({item}) => (
                 <FeedCard 
                     item = {item}
                     keyExtractor={(item) => item.username}
                 />

             )}
             showsVerticalScrollIndicator={false}
            
            />


            )
            
            }
        </>

        )
       
}

export default FriendFeed