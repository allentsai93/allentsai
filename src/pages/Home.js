import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';

const PageContainer = styled.div`
    min-width: 100vw;
    min-height: 90vh;
    display: flex;
    align-items: center; 
    flex-flow: column wrap;
    justify-content: flex-end;
    transition: min-height 200ms linear;
    position: sticky;
    top: -14vh;
    z-index: 2;
    ${(props) => props.scroll ? 
    'min-height: 30vh;' : ''}
`;

const HeroText = styled.h1`
    margin: 0;
    transform: translateX(-50%) translateY(-50%);
    & > * {
        font-weight: 100;
        line-height: 15px;
        margin: 0;
        font-size: 7vmin;
        ${(props) => !props.scroll ? 
        'opacity: 1' : 'font-size: 3vmin; opacity: 0'}
        transition: opacity 300ms linear;
    }
    position: absolute;
    left: 50%;
    top: 50%;
    ${(props) => !props.scroll ? 
        'font-size: 14vmin;' : 'font-size: 6vmin; transform: translateX(0); left: 0; padding: 0 20px;'}
    
    transition: all 200ms linear;
`;

const inActivePageContentHover = `
        transition: transform 100ms ease-in;
        transform: scale(1.1);
`;

const PageContents = styled.div`
    ${(props) => props.scroll ? 
    'width: 90vw; height: 90vw;' : 'width: 30vw; height: 30vw;'}
    border-radius: 6vmin;
    background: #FC466B;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
    transition: width 200ms linear, height 200ms linear, transform 100ms ease-in;
    & > * {
        ${(props) => props.scroll ? 'opacity: 1;' : 'opacity: 0;'}
        transition: opacity 600ms ease-in;
    }
    &:hover {
        ${p => !p.scroll ? css`${inActivePageContentHover}` : ''}
    }
    position: relative;
    z-index: 1;
    ${p => p.child ? css`${SiblingPageContent}` : ''}
`;

const ActiveContentWrapperAfter = `
    min-height: 90vw;
    bottom: -100vh;
    opacity: 0;
    z-index: 0;
    left: 63vw;
`;

const ActiveContentWrapperBefore = `
    min-height: 90vw;
    bottom: -100vh;
    opacity: 0;
    z-index: 0;
    left: -3vw;
`;

const SiblingPageContent = `
    margin: 30px 0;
`;

const ContentWrapper = styled.div`
    position: relative;

    &:after {
        min-width: 30vw;
        background: #1f4037;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */        
        position: absolute;
        min-height: 30vw;
        bottom: -1vh;
        opacity: 0.4;
        z-index: 0;
        transition: min-height 200ms ease-in, bottom 0.5s ease-out, opacity 0.3s ease-out;
        left: 25vw;
        content: "";
        border-radius: 6vmin;
        ${p => p.scroll ? css`${ActiveContentWrapperAfter}` : ''}
    }

    &:before {
        min-width: 30vw;
        background: #FC466B;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */        
        position: absolute;
        min-height: 30vw;
        opacity: 0.5;
        bottom: -3vh;
        transition: min-height 200ms ease-in, bottom 0.8s ease-out, opacity 0.2s ease-out;
        z-index: 0;
        left: -25vw;
        content: "";
        border-radius: 6vmin;
        ${p => p.scroll ? css`${ActiveContentWrapperBefore}` : ''}
    }
`;

const Navigation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & > a {
        text-decoration: none;
        color: black;
        font-weight: lighter;
        font-size: 4vmin;
        opacity: 1;
        ${p => p.scroll ? 'opacity: 0;' : ''}
        transition: opacity 0.3s ease-out;
    }
`;

const FixedNavigation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & > a {
        text-decoration: none;
        color: black;
        font-weight: lighter;
        font-size: 6vmin;
    }

    opacity: 0;
    position: absolute;
    width: 50vw;
    right: -2vw;
    top: 15vh;
    transition: opacity 0.1s ease-out;
    ${p => p.scroll ? 'opacity: 1; transition: opacity 0.7s ease-out;' : ''}
`;

class Home extends Component {
    state = {
        scroll: false
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.getWindowHeight);
     }
   
    componentWillUnmount = () =>{
        window.removeEventListener('scroll', this.getWindowHeight);
    }
    
    getWindowHeight = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop
        const shrinkOn = 10;

        if (distanceY >= shrinkOn) {
          this.setState({
            scroll: true
          })
        } else {
            this.setState({
                scroll: false,
            })
        }
    }

    render() {
        return (
            <>
            <PageContainer scroll={this.state.scroll} >
                <HeroText scroll={this.state.scroll} >
                    Dsaddsa Paks
                    <p>Test Test TEst</p>
                </HeroText>
                <Navigation scroll={this.state.scroll}>
                    <Link to="/projects">Projects</Link>
                    <Link to="/github">GitHub</Link>
                    <Link to="/exp">Experience</Link>
                </Navigation>
                <FixedNavigation scroll={this.state.scroll}>
                    <Link to="/projects">Projects</Link>
                    <Link to="/github">GitHub</Link>
                    <Link to="/exp">Experience</Link>
                </FixedNavigation>
            </PageContainer>
            <ContentWrapper scroll={this.state.scroll}>      
            <PageContents scroll={this.state.scroll} >
                <p>Contents</p>
            </PageContents>
            </ContentWrapper>
            <PageContents scroll child>
                <p>Contents</p>
            </PageContents>
            <PageContents scroll child>
                <p>Contents</p>
            </PageContents>   
            </>
        );
    }
};

export default Home;