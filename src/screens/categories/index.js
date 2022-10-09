import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {styles} from './styles'
import { CategoryItem } from '../../components';
import { categories } from '../../constants/data/index';

const Categories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Products', { name: item.title, categoryId: item.id});
    }
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />
    return (
        /* <View style={styles.container}>
            
            <CategoryItem item={categories[0]} onSelected= {()=> null} /> 
            <Button 
            title="Go to Products" 
            onPress={() => navigation.navigate("Products")}
            />
        </View> */
        
        <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.containerList}
        />
    )
}
export default Categories