import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RouteName from "../../utils/routes/RouteName";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import FavoriteScreen from "../../components/FavoriteArticles/FavoriteScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() { 
    return (
        <Tab.Navigator>
            <Tab.Screen name={RouteName.HomeScreen} component={HomeScreen} />
            <Tab.Screen name={RouteName.FavoriteArticles} component={FavoriteScreen} />
        </Tab.Navigator>
    )
}

