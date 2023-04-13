import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/PhotoBG.png")}
      >
        <View style={styles.form}>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder={"Логін"}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder={"Адреса електронної пошти"}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              placeholder={"Пароль"}
              secureTextEntry={true}
            />
          </View>
        </View>
      </ImageBackground>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  input: {
    margin: 50,
    width: 100,
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1,
  },
  form: {
    height: "100%",
    backgroundColor: "white",
    marginTop: 263,
    borderRadius: 25,
    alignItems: "center",
  },
});
