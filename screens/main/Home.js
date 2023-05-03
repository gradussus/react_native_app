import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../redux/Auth/authSlice";

const MainTab = createBottomTabNavigator();

import PostsScreen from "./PostsScreen";
import CreateScreen from "./CreateScreen";
import ProfileScreen from "./ProfileScreen";

export default function Home() {
  const aaa = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const asd = () => dispatch(signIn());
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#212121",
        tabBarStyle: {
          width: "auto",
          height: 58,
          alignItems: "center",
        },

        tabBarItemStyle: {
          borderRadius: 20,
          margin: 5,
          maxWidth: 70,
          minHeight: 40,
        },
        tabBarShowLabel: false,
        headerTitleAlign: "center",
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Feather
                onPress={asd}
                // onPress={() => navigation.navigate("Posts")}
                name="arrow-left"
                size={24}
                color="#212121"
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}
