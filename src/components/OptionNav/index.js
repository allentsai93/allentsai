import React, { Component } from 'react';
import App from '../../App';
import styled from 'styled-components';
import lightbulb from './lightbulb.svg';
import lightbulbOff from './lightbulb-off.svg';

class Theme extends Component {
    state = {
        toggle: false
    }

    toggleTheme = () => {
        const currentState = this.state.toggle;
        window.scrollTo(0, 0);
        this.setState({toggle: !currentState});
    }

    render() {
        const toggleImg = this.state.toggle ? lightbulb : lightbulbOff;
        return (
            <>
                <ToggleContainer onClick={this.toggleTheme} col={this.state.toggle}><img src={toggleImg} alt="toggle" /></ToggleContainer>
                <App toggle={this.state.toggle}/>
                <MobileMenu col={this.state.toggle}>
                    <MobileOption onClick={this.toggleTheme}><img src={toggleImg} alt="toggle" /></MobileOption>
                </MobileMenu>
            </>
        )
    }
}

const MobileMenu = styled.div`
    display: none;
    @media (max-width: 1024px) {
        width: 95vw;
        position: fixed;
        bottom: 1vh;
        height: 8vh;
        display: flex;
        display: none;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-evenly;
        z-index: 3;
        border-radius: 3vmin;
        border: 1px solid lightgray;
        background-color: ${p => !p.col ? '#ebebeb;' : '#141414;'}
    }
`;

const MobileOption = styled.div`

`;

const ToggleContainer = styled.div`
    display: none;

    @media (min-width: 1025px) {
        position: fixed;
        left: 0;
        margin: 20px;
        width: 7vmin;
        height: 4vmin;
        border: 1px solid lightgray;
        border-radius: 20px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        opacity: 0.3;
        z-index: 10;
        transition: opacity 200ms ease-out;
        -webkit-transition: opacity 200ms ease-out;
        -webkit-backface-visibility: hidden;
        will-change: opacity;
        &:hover {
            opacity: 1;
            transition: opacity 200ms ease-in;
            -webkit-transition: opacity 200ms ease-in;
            -webkit-backface-visibility: hidden;
            will-change: opacity;
        }
        bottom: 0;
        ${p => p.col ? 'color: white;' : 'color: black;'}
    }
`;

export default Theme;