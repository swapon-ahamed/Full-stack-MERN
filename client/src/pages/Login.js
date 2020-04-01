import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login } from '../store/actions/authActions'


class Login extends Component {

    constructor() {
        super();
        this.myForm = React.createRef();

    }

    state = {
        email: '',
        password: '',
        error: {}
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(JSON.stringify(nextProps.auth.error) !==  JSON.stringify(prevState.error)){
           return {
               error: nextProps.auth.error
           }
        }
      
       return null
   }

    changeHandeler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandeler = (event) => {
        event.preventDefault();
        let { email, password } = this.state
        this.props.login({  email, password },this.props.history)
    }

    render() {
        let { email, password, error } = this.state

        return (
            <form className="mt-5" ref={this.myForm} onSubmit={this.submitHandeler}>
                <h3>Login</h3>

                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email"
                            name="email"
                            className={error.email ? "form-control is-invalid" : "form-control"}
                            id="email" value={this.state.email}
                            onChange={this.changeHandeler}
                        />
                          {error.email &&<div className="invalid-feedback">
                            {error.email}
                        </div>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            name="password"
                            className={error.password ? "form-control is-invalid" : "form-control"}
                            id="inputPassword"
                            placeholder=""
                            value={this.state.password}
                            onChange={this.changeHandeler}
                        />
                        {error.password &&<div className="invalid-feedback">
                        {error.password}
                        </div>}
                    </div>
                </div>

                <div className="col-sm-10"><Link to="/register">If have not account? Please registration here</Link></div>
                <div className="col-sm-10">
                    <input type="submit" className="btn btn-primary " value="Submit" />
                </div>

            </form>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth

})

export default connect(mapStateToProps, { login })(Login)