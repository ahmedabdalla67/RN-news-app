import { createStackNavigator } from "@react-navigation/stack";
import RouteName from "../../utils/routes/RouteName";
import ArticleDetails from "../../components/ArticleDetails/ArticleDetails";
import { ArticleType } from "../../Types/ArticleType";

const Stack = createStackNavigator();

export default function SharedStack() { 
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={RouteName.ArticleDetails} component={ArticleDetails} />
        </Stack.Navigator>
    );
}

export type SharedStackParamList = {
    [RouteName.ArticleDetails]: { article: ArticleType };
}