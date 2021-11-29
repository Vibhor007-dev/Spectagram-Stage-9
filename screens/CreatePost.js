import * as React from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import ToggleSwitch from '../components/ToggleSwitch';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview_image: 'image1',
      light_theme=true,
      postId:this.props.post.key,
      post_data:this.props.post.value
    }
  }
  async addPost() {
    if (
      this.state.caption
    ) {
      let postData = {
        preview_image: this.state.preview_image,
        caption: this.state.caption,
        author: firebase.auth().currentUser.displayName,
        createdOn: new Date(),
        author_uid: firebase.currentUser.uid,
        profile_image: this.state.profile_image,
        likes: 0
      }
      await firebase
        .database()
        .ref(
          "/posts/" +
          Math.random()
            .toString(36)
            .slice(2)
        )
        .set(postData)
        .then(function (snapshot) { });
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Feed")
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress=() => console.log("OK pressed") }],
        { cancelable: false }
      )
    }
  }

  render() {
    let preview_images = {
      image1: require('../assets/image_1.jpg'),
      image2: require('../assets/image_2.jpg'),
      image3: require('../assets/image_3.jpg'),
      image4: require('../assets/image_4.jpg'),
      image5: require('../assets/image_5.jpg'),
    }
    return (

      
        < View >
        <><SafeAreaView style={styles.droidSafeArea} /><View style={styles.appTitle}>
          <View style={styles.appIcon}>
          </View>
        </View><View>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            ></Image>

          </View><View>
            <Text> New Post </Text>
          </View><View>
            <ScrollView>
              <Image
                source={preview_images[this.state.preview_image]}
                style={styles.previewImageStyle} />
            </ScrollView>
          </View><View>
            <DropDownPicker
              items={[
                { label: 'Image 1', value: 'image1' },
                { label: 'Image 2', value: 'image2' },
                { label: 'Image 3', value: 'image3' },
                { label: 'Image 4', value: 'image4' },
                { label: 'Image 5', value: 'image5' },
              ]}
              defaultValue={this.state.preview_image}
              onChangeItem={(item) => {
                this.setState({ preview_image: item.value });
              }}
              dropDownStyle={{ backgroundColor: 'green' }}
              style={{ backgroundColor: 'transparent' }}
              containerStyle={{ borderRadius: 10, height: 40 }}
              labelStyle={{
                color: 'blue',
                fontFamily: 'Bubblegum-Sans',
              }}
              arrowColor={"red"}
              showArrow={true}
              activeItemStyle={{ backgroundColor: "yellow" }}
              onOpen={() => {
                this.setState({ dropDownHeight: 190 });
              }}
              onClose={() => {
                this.setState({ dropDownHeight: 40 });
              }} />
          </View></>
              </View>
      )



  }
}


const styles = StyleSheet.create{(
  droidSafeArea: {
    marginTop:Platform.OS==="android"?StatusBar.currentHeight : RFValue(35)
  },
appIcon: {
  flex: 0.2,
    justifyContent: "center",
      alignItems: "center",

  },
appTitle: {
  flex: 0.07,
    flexDirection: "row",
  },
iconImage: {
  width: "100%",
    height: "100%",
      resizeMode: "contain",
  },
previewImageStyle: {
  width: RFPercentage(80),
    height: RFPercentage(30),
      resizeMode: 'contain',
        alignSelf: 'center',
    //borderRadius:RFValue(10)
  },
})