// Include React
import React, { Component } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Card from "react-bootstrap/Card";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import Button from "react-bootstrap/Button";
import { Jumbotron, Card, ButtonToolbar, Button, Container, Row, Col, } from "react-bootstrap";
import './CSS/style.css';

import menu from '../menu.jpg';
// import Jumbotron from './Jumbotron'


// import nav bar
// import pictures

// Create drinks menu component
export default class Menu extends Component {
    render() {
        return (
            <div>
         

                <div>
                    <img src={menu} className="menu-img" alt="menu" />
                    
                </div>

                <Container>
                    <div className="container" id="menuItems">
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h2>
                                            Smoothies
                            </h2>
                                        <h4>
                                            Soymilk and Almond Milk available on request. Orgnaic milk 60¢
                            </h4>
                                        <h4>$4.25</h4>
                                        <ul>
                                            <li>Green Apple</li>
                                            <li>Mango</li>
                                            <li>Passion Fruit</li>
                                            <li>Peach</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h2>
                                            Fresh Fruit Juice
                            </h2>
                                        <h4>$4.75</h4>
                                        <ul>
                                            <li>Honey Dew</li>
                                            <li>Orange</li>
                                            <li>Watermelon</li>
                                            <li>Lemon Honey</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h2>
                                            Coffee
                            </h2>
                                        <h4></h4>
                                        <ul>
                                            <li>Americano</li>
                                            <li>Hot Chocolate</li>
                                            <li>Latte</li>
                                            <li>Sea Salt Latte</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>



                        </Row>
                    </div>
                </Container>
                <ButtonToolbar>
                    <Button variant="primary">Checkout</Button>
                </ButtonToolbar>

            </div>
        )
    }
}