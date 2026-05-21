import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RouteName from "../../utils/routes/RouteName";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import FavoriteScreen from "../../components/FavoriteArticles/FavoriteScreen";
import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";

const Tab = createBottomTabNavigator();

export default function MainTabs() { 
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name={RouteName.HomeScreen} component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => {
                        <Ionicons name="home" size={24} color={color} />
                    },
                    tabBarActiveTintColor: "red"
                }}
            />
            <Tab.Screen
                name={RouteName.FavoriteArticles} component={FavoriteScreen}
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ({ color }) => {
                        <Ionicons name="heart" size={24} color={color} />
                    },
                    tabBarActiveTintColor: "red"
                }}
            />
        </Tab.Navigator>
    )
}

