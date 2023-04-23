import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [isSecure, setIsSecure] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [state, setState] = useState({});
  const omSecureClick = () => {
    setIsSecure(!isSecure);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/PhotoBG.png")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ width: "100%" }}
        >
          <View style={styles.form}>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.input}>
              <TextInput
                textAlign={"center"}
                alignItems={"center"}
                height={"100%"}
                placeholder={"Логін"}
                onFocus={() => setKeyboard(true)}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
            </View>
            <View style={styles.input}>
              <TextInput
                textAlign={"center"}
                alignItems={"center"}
                height={"100%"}
                onFocus={() => setKeyboard(true)}
                placeholder={"Адреса електронної пошти"}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View style={styles.input} position={"relative"}>
              <TextInput
                textAlign={"center"}
                alignItems={"center"}
                height={"100%"}
                placeholder={"Пароль"}
                onFocus={() => setKeyboard(true)}
                secureTextEntry={isSecure}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.secureBtn}
                onPress={omSecureClick}
              >
                <Text style={styles.secureItem}>
                  {isSecure ? "Показати" : "Скрити"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.submit}>
              <Text style={styles.btnItem}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.maybeLogin}>Вже є аккаунт? Увійти</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
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
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
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
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 92,
    fontSize: 30,
  },
  submit: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    backgroundColor: "#FF6c00",
    width: "100%",
    height: 50,
    borderRadius: 25,
  },
  btnItem: {
    color: "#fff",
    fontSize: 16,
  },
  secureBtn: {
    position: "absolute",
    backgroundColor: "transparent",
    right: 16,
    top: 16,
  },
  secureItem: {
    color: "#1B4371",
  },
  maybeLogin: {
    marginTop: 16,
    marginBottom: 78,
    color: "#1B4371",
    fontSize: 16,
  },
});
