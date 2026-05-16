import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 16,
        paddingHorizontal: 16
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    listContent: {
        marginTop: 10,
    },
    cardCont: {
        flexDirection: 'row',
        gap: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        paddingEnd: 10,
        marginBottom: 10,
    },
    cardArticleImage: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    cardArticleName: {
        flex: 1,
        textAlign: 'left',
        marginTop: 10,
    }
})