import React from "react";
import ProductItem from "../ProductItem";
import { productListsValue } from '../../ReduxStore/Actions'
import { connect } from "react-redux";
import { productListAPI } from "../../Utility/BackendApi";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Home from '../Home'



// import withContext from "../withContext";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupedArray: [],
            categories: [],
            categoryModeOn:false,
            selectedCategory:""
        }
    }
    componentDidMount() {
        console.log(this.props.productsList)
        this.groupCategory(this.props.productsList)
    }

    groupCategory(dataValue) {
        let data = dataValue
        let result = data.reduce(function (r, a) {
            r[a.category] = r[a.category] || [];
            r[a.category].push(a);
            return r;
        }, Object.create(null));
        console.log(result)
        this.setState({ groupedArray: result })
        this.setState({ categories: Object.keys(result) })

    }

    categorySelected(category){
        console.log(category)
        // return <Redirect to="/" />
        this.setState({categoryModeOn:true,selectedCategory:category})
    }
    render() {

        let { groupedArray, categories } = this.state;
        return (
            <>
            {!this.state.categoryModeOn &&
            <React.Fragment>
                <div className="hero is-primary">
                    <div className="hero-body container">
                        <h4 className="title">Category</h4>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="column columns is-multiline">
                        {categories && categories.length ? (

                            categories.map((category, index) => (
                                <div className="column is-half " >
                                    <div className="box is-clickable " onClick={(e) => this.categorySelected(category)}>
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-64x64 ">
                                                    <img
                                                        src={this.state.groupedArray[category][0].image}
                                                        alt={this.state.groupedArray[category][0].title}
                                                    />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <b style={{ textTransform: "capitalize" }}>
                                                    {category}

                                                </b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="column">
                                <span className="title has-text-grey-light">
                                    No Categories found!
                                </span>
                            </div>
                        )}

                    </div>
                </div>
                </React.Fragment>
                }
                {this.state.categoryModeOn &&
                <Home filterdata={this.state.groupedArray[this.state.selectedCategory]} categoryModeOn={this.state.categoryModeOn} selectedCategory={this.state.selectedCategory}/>}
            </>
        );
    }
};
const mapStateToProps = state => {
    return {
        productsList: state.productsList
    }
}

const mapActionToProps = {
    productListsValue
}

export default connect(mapStateToProps, mapActionToProps)(Category);

