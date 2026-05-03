import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        borderRadius: 20,
        overflow: 'hidden',
        width: 350
    },
    internalContainer: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 10,
        marginTop: 100,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    redContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        alignSelf: 'flex-start',
        padding: 10
    },
    textRedContainer: {
        color: 'white'
    },
    textInternalContainer: {
        color: 'black',
        marginTop: 10
    },
    listContainer: {
        marginTop: 20
    }
});