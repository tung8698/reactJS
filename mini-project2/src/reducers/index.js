import {combineReducers} from 'redux';
import listProduct from './listProduct';

export const reducers = combineReducers({
    listProduct:listProduct,
})