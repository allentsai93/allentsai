import React, { Component } from 'react';
import App from '../App';
import styled, {css} from 'styled-components';

class Theme extends Component {
    state = {
        toggle: false
    }

    toggleTheme = () => {
        const currentState = this.state.toggle;
        this.setState({toggle: !currentState});
    }

    render() {
        return (
            <>
                <ToggleContainer onClick={this.toggleTheme} theme={!this.state.toggle}>Toggle</ToggleContainer>
                <App toggle={this.state.toggle}/>
            </>
        )
    }
}

const ToggleContainer = styled.div`
    position: fixed;
    left: 0;
    margin: 20px;
    width: 100px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    opacity: 0.3;
    z-index: 10;
    transition: opacity 200ms ease-out;
    will-change: opacity;
    &:hover {
        opacity: 1;
        transition: opacity 200ms ease-in;
        will-change: opacity;
    }
    bottom: 0;

    ${p => p.toggle ? 'color: white;' : 'color: black;'}
`;

export default Theme;