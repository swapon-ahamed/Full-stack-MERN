import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../store/actions/authActions'

class Register extends Component {

    state =  {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: {}
    }


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

        let { name, email, password, confirmPassword } = this.state
        this.props.register({ name, email, password, confirmPassword },this.props.history)
    }

    render() {
        let { name, email, password, confirmPassword, error } = this.state
      
        return (
            <form className="mt-5" ref={this.myForm} onSubmit={this.submitHandeler}>
                <h3>Registration</h3>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="name"
                            className={error.name ? "form-control is-invalid" : "form-control"}
                            id="name"
                            value={this.state.name}
                            onChange={this.changeHandeler}
                        />
                        {error.name && <div className="invalid-feedback">
                            {error.name}
                        </div>}
                    </div>
                </div>
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

                <div className="form-group row">
                    <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            name="confirmPassword"
                            className={error.confirmPassword ? "form-control is-invalid" : "form-control"}
                            id="confirmPassword"
                            placeholder=""
                            value={this.state.confirmPassword}
                            onChange={this.changeHandeler}
                        />
                        {error.confirmPassword &&<div className="invalid-feedback">
                            {error.confirmPassword}
                        </div>}
                    </div>
                </div>
                <div className="col-sm-10"><Link to="/login">Have you account? Please login here</Link></div>
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

export default connect(mapStateToProps, { register })(Register)