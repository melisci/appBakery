import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 150,
        backgroundColor: "#9E768F",
        padding: 8,
        
    },  
    item: {
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    },
    price: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detail: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
    },
});