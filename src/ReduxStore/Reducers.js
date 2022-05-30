
const initialState = {
    productsList:[],
    getSelectedProduct: {},
    addToCartCountValue:0,
    addedProductToCartValue:[]
}

const Reducers = (state=initialState,action) =>{
    switch(action.type){
        case "PRODUCT_LIST_VALUE": return {
            ... state,
            productsList: action.payload
        }
        case "SET_SELECTED_PRODUCT": return {
            ... state,
            getSelectedProduct: action.payload
        }
        case "ADD_TO_CART_COUNT": return {
            ... state,
            addToCartCountValue: action.payload
        }
        case "ADDED_PRODUCT_TO_CART": return {
            ... state,
            addedProductToCartValue: action.payload
        }
        default:
            return state;
    }
}

export default Reducers;