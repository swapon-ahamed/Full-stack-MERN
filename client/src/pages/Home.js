import React, { Component } from 'react';
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import { login } from '../store/actions/authActions'
class Home extends Component  {

    render(){
       
        return(
            <div>
                <h1>Home page</h1>
                
            {/* {
                
                this.props.auth.isAutenticated ? 
                <Link to="/logout"> <button className="btn btn-danger">Logout</button></Link> :
                <Link to="/login">  <button className="btn btn-primary">Login</button></Link>
            } */}
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    auth: state.auth
    
})


export default connect(mapStateToProps)(Home)