import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/header";
import MainNews from "../../components/MainNews/mainNews";
import TopNews from "../../components/TopNews/TopNews";

function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <MainNews />
                <TopNews />
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen;