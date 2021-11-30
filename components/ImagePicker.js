import React, { useState, useEffect } from 'react';
import { Text, Image, View, Platform , StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AddImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View >
      <View style={styles.btnContainer}>

        <TouchableOpacity style={styles.btn} >
          <Text style={styles.btnText} onPress={pickImage}>
            ADD IMAGE
          </Text>
        </TouchableOpacity>

      </View>
      {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
    </View>
  );
}

const styles = StyleSheet.create({

  btnContainer: {
      width: '100%',
      alignItems: 'center',
      maxHeight: 80,
  },

  btn: {
      flex: 1,
      width: 300,
      backgroundColor: 'white',
      height: 50,
      maxHeight: 50,
      lineHeight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      marginBottom: 20,
      borderRightWidth:1,
      borderLeftWidth:1,
      borderBottomWidth:1,
      borderTopWidth:1,
      borderColor: "#08abf4"

  },
  btnText: {
      color: '#08abf4',
      fontSize: 20,
      letterSpacing: 3,
      textTransform: "uppercase"
  },
 


});
