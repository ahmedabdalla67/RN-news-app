import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../components/Login/LoginScreen";
import RouteName from "../../utils/routes/RouteName";
import MainTabs from "../MainTabs/MainTabs";

const Stack = createStackNavigator();

export default function AuthStack() { 
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={RouteName.LoginScreen} component={LoginScreen} />
        </Stack.Navigator>
    );
}