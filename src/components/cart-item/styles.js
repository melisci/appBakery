import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "OpenSans-Bold",
        color: colors.text,
        marginBottom: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    content: {
        flex: 1,
    },
    quantity: {
        fontSize: 16,
        fontFamily: "OpenSans-Regular",
        color: colors.text,
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: colors.text,
        fontFamily: "OpenSans-Bold",
    },
})