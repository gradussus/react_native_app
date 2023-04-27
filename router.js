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
      <MainTab.Navigator tabBar={}>
        <MainTab.Screen name="Posts" component={PostsScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
        <MainTab.Screen name="Create" component={CreateScreen} />
      </MainTab.Navigator>
    );
  }
};
