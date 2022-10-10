import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {styles} from './styles'
import { CategoryItem } from '../../components';
// import { categories } from '../../constants/data/index';

import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions";

const Categories = ({navigation, route}) => {
    const categories = useSelector((state) => state.category.categories);
    const dispatch = useDispatch();
    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', { name: item.title });
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