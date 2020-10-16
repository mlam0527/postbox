import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cameraicon from '../assets/cameraicon.png';

export default function PhotoGrid({ photos, numColumns, onEndReached }) {
  const { width } = Dimensions.get('window');

  const size = width / numColumns;
  console.log('grid photos', photos);
  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => {
        return item.id;
      }}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <TouchableOpacity key={item.id} style={styles.container}>
          <View style={styles.photoContainer}>
          <Image
            key={item.id}
            style={styles.photo}
            source={{
              // width: size,
              uri: item.imageURI,
            }}
          />

          {/* <Image style={styles.icon} source={cameraicon} /> */}
          <Text style={styles.userText}>Created By: {`${item.username}`}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 7,
    width: '100%',
    marginTop: 10,
  },
  photoContainer: {
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  photo: {
    marginTop: 10,
    backgroundColor: 'black',
    height: 150,
    width: "90%",
    alignSelf: "center",
  },
  icon: {
    width: 80,
    height: 80,
    marginTop: 25,
    marginHorizontal: 30,
  },
  userText: {
    marginHorizontal: 5,
    justifyContent: "center",
    alignContent: "center",
    padding: 3,
    fontSize: 11,
  }
});
