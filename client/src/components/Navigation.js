import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { login } from '../store/actions/authActions'
import { logout } from '../store/actions/authActions'

class Navigation extends Component {

    render() {
        console.log(this.props)
        return (

            <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Register">Register</NavLink>
                </li>
                {

                    this.props.auth.isAutenticated ?
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                onClick={() => this.props.logout(this.props.history)}
                                to="/logut">Logout</NavLink>
                        </li>
                        :
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                }

            </ul>


        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth

})

export default connect(mapStateToProps, { logout })(Navigation)