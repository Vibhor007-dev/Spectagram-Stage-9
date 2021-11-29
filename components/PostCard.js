import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, Image} from 'react-native';
import RFValue from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.cardContainer}>
      <View style={styles.authorContainer}>
      <View style={styles.authorImageContainer}>
      <Image source={require("../assets/profile_img.png")}/>

        </View>
        <View>
        <Text> Author1 </Text>
        </View>
        </View>

        <Image source={require("../assets/post.jpeg")}/>
        </View>
        </View>
        


    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"yellow"
  },
  cardContainer:{
    flex:0.85,
  },
  authorContainer:{
    flex:0.56,
  },
  authorImageContainer:{
    flex:0.78,
  },
})