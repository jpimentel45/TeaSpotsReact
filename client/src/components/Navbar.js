import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import {Route, Link } from 'react-router-dom'
// import logo from '../logo.svg';
import './CSS/style.css';
import axios from 'axios'
import LoginForm from './login-form'
import ShoppingList from './ShoppingList';
import Special from './Special';
import Home from './home'
import { Container } from 'reactstrap'
import ItemModal from './ItemModal'
class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    getUser() {
        axios.get('/user/profile').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    //signup
    signup() {
        axios.get('/user/signup').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')
                this.props.history.push('/register')
            } else {
                console.log('Get user: no user');
               
            }
        })
    }


    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
            localStorage.removeItem('usertoken')
            this.props.history.push('/login')
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span></Link>
                                <Link to="/Profile" className="btn btn-link text-secondary" onClick={this.getUser}>
                                    <span className="text-secondary">profile</span>
                                </Link>
                                <Link className="btn btn-link" onClick={this.signup}>
                                    <span className="text-secondary">sign up</span>
                                </Link>
                                <Link to="/updateSpecial" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Update Special</span>
                                </Link>
                            </section>
                        ) : (
                        
                                <section className="navbar-section">
                                    <Link to="/home" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Home</span>
                                    </Link>

                                    <Link to="/special" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Daily Special</span>
                                    </Link>

                                    {/* only employees should be able to update the special */}

                                   

                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Login</span>
                                    </Link>
                                   
                                </section>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="App-title">TEASPOTS</h1>
                    </div>
               
                </header>
                

                <Route
                    path="/updateSpecial"
                    render={() =>

                        <Container>
<p>Make sure to delete, and add a new special</p>
                            <ItemModal />
                            <ShoppingList />
                        </Container> } />
                

                <Route
                    path="/home"
                    render={() =>
                        <Home
                        // updateUser={this.updateUser}
                        />} />
                <Route
                    path="/login"
                    render={() =>
                        <LoginForm
                        // updateUser={this.updateUser}
                        />} />
                <Route
                    path="/special"
                    render={() =>
                        <div>
                        <p>Pasadena Daily Special:</p>
                        <Special
                
                        // updateUser={this.updateUser}
                        />
                        </div>}
                        />
            </div>

        );

    }
}

export default Navbar