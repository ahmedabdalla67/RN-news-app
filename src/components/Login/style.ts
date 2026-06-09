import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 40,
    },
    loginText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    noteText: {
        fontSize: 16,
        color: 'gray',
        alignSelf: 'center'
    },
    frame: {
        marginTop: 40,
        marginHorizontal: 20,
    },
    labelText: {
        fontSize: 16,
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        marginBottom: 20,
    },

    btn: {
        backgroundColor: 'gold',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 20,
    },

    textBtn: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});