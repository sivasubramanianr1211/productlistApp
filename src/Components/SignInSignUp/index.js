import React from "react";
import { productListsValue } from '../../ReduxStore/Actions'
import { connect } from "react-redux";
import { users } from "../../Utility/BackendApi";
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignInSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: [],
            products: [],
            user_name: "",
            password: "",
            email: "",
            confirm_password: "",
            openSignUp: false
        }
    }

    handleSignIn() {
        console.log(this.state.user_name)
        console.log(this.state.password)
        let jsonBody = {
            username: this.state.user_name,
            password: this.state.password

        }
        axios.post(users, JSON.stringify(jsonBody)).then(res => {
            // this.props.productListsValue(res.data)
            // this.setState({cartsList:res.data})
        }).catch(err => {
            toast.error("SOMETHING WENT WRONG", { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
        })

    }

    addUser() {

    }

    signUp() {
        this.setState({
            openSignUp: true,
            user_name: "",
            password: ""
        })

    }

    render() {

        return (
            <>
                <div className="hero is-warning column is-half is-offset-one-quarter">
                    <div className="hero-body container">

                        <h4 className="title">{!this.state.openSignUp ? "Welcome" : "Register Now!"}</h4>

                    </div>
                </div>
                <div class="card column is-half is-offset-one-quarter mt-6">
                    {!this.state.openSignUp ?
                        <>
                            <div class="field">
                                <TextField
                                    value={this.state.user_name}
                                    label="User Name"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => { this.setState({ user_name: e.target.value }) }}
                                ></TextField>
                            </div>
                            <div class="field">
                                <TextField
                                    value={this.state.password}
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                ></TextField>
                            </div>
                            <div class="field is-grouped">
                                <div class="control">
                                    <button class="button is-link" onClick={() => this.handleSignIn()}>Sign In</button>
                                </div>
                                <div class="control">
                                    <button class="button is-link is-light" onClick={() => { this.signUp() }}>Sign Up</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div class="field">
                                <TextField
                                    value={this.state.user_name}
                                    label="User Name"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => { this.setState({ user_name: e.target.value }) }}
                                ></TextField>
                            </div>
                            <div class="field">
                                <TextField
                                    value={this.state.email}
                                    label="Email Address"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => { this.setState({ user_name: e.target.value }) }}
                                ></TextField>
                            </div>
                            <div class="field">
                                <TextField
                                    value={this.state.password}
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                ></TextField>
                            </div>
                            <div class="field">
                                <TextField
                                    value={this.state.confirm_password}
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                ></TextField>
                            </div>
                            <div class="field is-grouped">
                                <div class="control">
                                    <button class="button is-link" onClick={() => this.addUser()}>Submit</button>
                                </div>
                                <div class="control">
                                    <button class="button is-link is-light" onClick={() => { this.setState({ openSignUp: false }) }}>Back</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
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

export default connect(mapStateToProps, mapActionToProps)(SignInSignUp);

