import { categories } from '../../constants/data/categories'
import { categoryTypes } from '../types';

const initialState = {
    categories: categories,
    selected: null
}

const categoryReducer = (state = initialState, action) => {
    return state
}

export default categoryReducer;