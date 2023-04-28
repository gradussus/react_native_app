import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/defaultAvatar.png")}
        ></Image>
        <View style={{ marginLeft: 8, paddingVertical: 10 }}>
          <Text style={styles.name}>Stepan Giga</Text>
          <Text style={styles.email}>asd@asd.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  profileContainer: {
    flexDirection: "column",
    flexWrap: "wrap",

    height: 60,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    width: 60,
    height: 60,
  },
  name: {
    fontSize: 13,
    fontFamily: "Roboto-Bold",
    color: "#212121",
  },
  email: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    color: "#212121CC",
  },
});

export default PostsScreen;
