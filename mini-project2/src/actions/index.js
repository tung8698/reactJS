import * as types from '../constants/actionTypes';

//action cho chuc nang hien thi thong tin san pham
export const act_list_product = ()=>{
    return{
        type: types.LIST_PRODUCT
    }
}

//action cho chuc nang mua hang(Nhan vao nut mua hang)
export const act_buy_item = (product,quantity) =>{
    return{
        type:types.BUY_ITEM,
        product,
        quantity
    }
}

//action cho chuc nang cap nhat gio hang
export const act_update_item = (product,quantity) =>{
    return{
        type:types.UPDATE_ITEM,
        product,
        quantity
    }
}

//action cho chuc nang xoa sp trong gio hang
export const act_remove_item = (product) =>{
    return{
        type:types.REMOVE_ITEM,
        product,
    }
}

//action cho chuc nang thay doi noi dung thong bao
export const act_change_notify = (message) =>{
    return{
        type:types.CHANGE_NOTIFY,
        message,
    }
}