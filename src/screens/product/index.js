import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'
import {products} from '../../constants/data'
const Product = ({navigation, route}) => {
    const { productId } = route.params;
    const product = products.find(product => product.id === productId);

    return (
        <View style={styles.container}>
            <Text>id: {product.id}</Text>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Text>Peso: {product.weight}</Text>
        </View>
    )
}
export default Product