import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
        backgroundColor: colors.secondary,
        height: 90,
        
        marginVertical: 5,
        borderRadius: 5,
    },
    
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    
    total: {
        fontSize: 16,
        fontFamily: "OpenSans-Bold",
    },
});