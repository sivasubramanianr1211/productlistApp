export const productListsValue = (data) => dispatch =>{
    console.log('data',data)
    dispatch({
        type: "PRODUCT_LIST_VALUE",
        payload: data
    })
}

export const setSelectedProduct = (data) => dispatch =>{
    console.log('data',data)
    dispatch({
        type: "SET_SELECTED_PRODUCT",
        payload: data
    })
}
export const addToCartCount = (data) => dispatch =>{
    console.log('data',data)
    dispatch({
        type: "ADD_TO_CART_COUNT",
        payload: data
    })
}

export const addedProductToCart = (data) => dispatch =>{
    console.log('data',data)
    dispatch({
        type: "ADDED_PRODUCT_TO_COUNT",
        payload: data
    })
}