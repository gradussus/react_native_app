import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import PostsScreen from "./screens/main/PostsScreen";
import CreateScreen from "./screens/main/CreateScreen";
import ProfileScreen from "./screens/main/ProfileScreenn";

import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegisterScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  } else {
    return (
      <MainTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 58 },
          headerTitleAlign: "center",
        }}
      >
        <MainTab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="grid" size={24} color="#212121" />
            ),
          }}
        />
        <MainTab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="plus" size={24} color="#fff" />
            ),
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Feather name="arrow-left" size={24} color="#212121" />
              </View>
            ),
            headerStyle: {},
            tabBarIconStyle: {
              backgroundColor: "#FF6C00",
              width: 70,
              borderRadius: 20,
              marginTop: 9,
              marginBottom: 9,
            },
          }}
        />
        <MainTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="user" size={24} color="black" />
            ),
          }}
        />
      </MainTab.Navigator>
    );
  }
};
