import { View, Text, ScrollView } from "react-native";
import Header from "../../components/Header/header";
import MainNews from "../../components/MainNews/mainNews";
import TopNews from "../../components/TopNews/TopNews";

function HomeScreen() {
    return (
        <ScrollView>
            <Header />
            <MainNews />
            <TopNews />
        </ScrollView>
    )
}

export default HomeScreen;