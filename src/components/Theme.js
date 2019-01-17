import React, { Component } from 'react';
import App from '../App';
import styled, {css} from 'styled-components';

class Theme extends Component {
    state = {
        theme: ''
    }

    render() {
        return (
            <>
                <div>Toggle</div>
                <App theme={this.state.theme}/>
            </>
        )
    }
}

export default Theme;