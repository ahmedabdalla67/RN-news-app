import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RouteName from "../../utils/routes/RouteName";
import FavoriteScreen from "../../components/FavoriteArticles/FavoriteScreen";
import React from "react";
import { Ionicons } from "@react-native-vector-icons/ionicons/static";
import HomeStack from "../Stack/HomeStack";

const Tab = createBottomTabNavigator();

const HomeIcon = ({ color }: { color: string }) => (
    <Ionicons name="home" size={24} color={color} />
);

const FavoriteIcon = ({ color }: { color: string }) => (
    <Ionicons name="heart" size={24} color={color} />
);

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
                    tabBarIcon: HomeIcon,
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "gray"
                }}
            />
            <Tab.Screen
                name={RouteName.FavoriteArticles} component={FavoriteScreen}
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: FavoriteIcon,
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "gray"
                }}
            />
        </Tab.Navigator>
    )
}

