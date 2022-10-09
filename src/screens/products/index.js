import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {styles} from './styles'
import { products } from "../../constants/data";
import { ProductItem } from "../../components";

    const Products = ({ navigation, route }) => {
        const { categoryId } = route.params;
    
        const productsFiltered =  products.filter(product => product.categoryId === categoryId);
        const onSelected = (item) => {
           navigation.navigate('Product', { name: item.title, productId: item.id });
        };   
        const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />
    


    return (
        /* <View style={styles.container}>
            <Text> Products </Text>
            <Button 
            title="Product Detail" 
            onPress={() => navigation.navigate("Product")}
            />
        </View> */
        <FlatList 
        data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}
export default Products