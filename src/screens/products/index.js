import React from 'react';
import {View, Text, Button} from 'react-native';

const Products = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Products </Text>
            <Button 
            title="Product Detail" 
            onPress={() => navigation.navigate("Product")}
            />
        </View>
    )
}
export default Products