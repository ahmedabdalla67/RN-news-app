import { View, Text } from "react-native";
import Header from "../../components/Header/header";
import MainNews from "../../components/MainNews/mainNews";

function HomeScreen() {
    return (
        <View>
            <Header />
            <MainNews />
        </View>
    )
}

export default HomeScreen;