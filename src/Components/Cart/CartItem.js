//cartitem - this function is used to show reach product that added into the cart

import React from "react";
import { productListsValue } from '../../ReduxStore/Actions'
import { connect } from "react-redux";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupedArray: [],
            categories: [],
            categoryModeOn: false,
            selectedCategory: "",
            cartList: [],
            cartItem: {}
        }
    }
    componentDidMount() {
        this.setState({ cartItem: this.props.cartItem })
    }

    render() {
        let { cartItem } = this.state;
        return (
            <>
                <div className=" column is-half">
                    <div className="box">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img
                                        src={cartItem.image}
                                        alt={cartItem.description}
                                    />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div><b>Product: {cartItem.title}</b></div>
                                <div><b>Product ID: {cartItem.id}</b></div>
                                <div><b>Qty: {cartItem.count}</b></div>
                                <div><b>Price: {cartItem.count * cartItem.price}</b></div>
                            </div>
                            <div
                                className="media-right"
                            >
                                <span className="delete is-large"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
const mapStateToProps = state => {
    return {
        productsList: state.productsList,
        addedProductToCartValue: state.addedProductToCartValue
    }
}

const mapActionToProps = {
    productListsValue
}

export default connect(mapStateToProps, mapActionToProps)(CartItem);

