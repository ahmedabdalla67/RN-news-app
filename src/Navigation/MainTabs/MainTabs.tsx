import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RouteName from "../../utils/routes/RouteName";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import FavoriteScreen from "../../components/FavoriteArticles/FavoriteScreen";
import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import HomeStack from "../Stack/HomeStack";

const Tab = createBottomTabNavigator();

export default function MainTabs() { 
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name={RouteName.HomeStack} component={HomeStack}
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

