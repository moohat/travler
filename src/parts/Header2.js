import React, { Component } from "react";
import { render } from "react-dom";

import Button from 'elements/Button'
import BrandIcon from './IconText';
import {  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from "reactstrap";

export default class Header2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.getNavLinkClass = this.getNavLinkClass.bind(this);
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    getNavLinkClass(path){
        return this.props.location.pathname === path ? " active" : "";
    }
    render() {
        return (
            <div>
             
                {/* <Navbar color="light" light expand="lg"> */}
                <Navbar>
                <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavbarBrand>

                    <BrandIcon />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

                    {/* <!-- create hamburger icon while minimize as mobile view --> */}              
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar className="navbar-nav ml-auto">
                        <NavItem>
                               
                                <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${this.getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="">
                                    Home
                                 </Button>
                            </li>
                            <li className={`nav-item${this.getNavLinkClass("/browse-by")}`}>
                                <Button className="nav-link" type="link" href="/browse-by">
                                    Browse By
                                 </Button>
                            </li>
                            <li className={`nav-item${this.getNavLinkClass("/stories")}`}>
                                <Button className="nav-link" type="link" href="/stories">
                                    Stories
                                 </Button>
                            </li>
                            <li className={`nav-item${this.getNavLinkClass("/agents")}`}>
                                <Button className="nav-link" type="link" href="/agents">
                                    Agents
                                 </Button>
                            </li>
                        </ul>
                            </NavItem>
                        </Nav>
                    </Collapse>
                
                </nav>


            </div>

        </header>
                </Navbar>

              
            </div>
        );
    }
}