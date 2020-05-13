import React, { Component } from 'react';
import Header from 'parts/Header2'

export default class LandingPage extends Component {
    render() {
        return (
            <>
           <Header {...this.props}></Header>
           {/* <Header /> */}
                
            </>
        )
    }
}
