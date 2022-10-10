import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        
    },
    containerList: {
        flex: 1,
        backgroundColor: "#fff",
        padding:12,
    },
    footer: {
        borderTopColor: colors.primary,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10
    },
    buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textButtonConfirm: {
        fontFamily: "OpenSans-Bold",
        fontSize: 20,
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    totalTitle: {
        fontFamily: "OpenSans-Bold",
        fontSize: 20,
    },
    total: {
        fontFamily: "OpenSans-Bold",
        fontSize: 20,
    }
     })