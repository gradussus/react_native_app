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
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder={"Логін"}
          />

          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder={"Адреса електронної пошти"}
          />

          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder={"Пароль"}
            secureTextEntry={true}
          />
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
    marginTop: 16,
    width: "100%",
    height: 50,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  form: {
    height: "100%",
    backgroundColor: "white",
    marginTop: 263,
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    color: "black",
    marginTop: 92,
    fontSize: 30,
  },
});
