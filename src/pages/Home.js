import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';

const PageContainer = styled.div`
    min-width: 100vw;
    min-height: 60vh;
    display: flex;
    align-items: center; 
    flex-flow: column wrap;
    justify-content: flex-end;
    transition: min-height 200ms linear;
    will-change: min-height;
    position: sticky;
    top: -20vh;
    z-index: 2;
    ${(props) => props.scroll ? 
    'min-height: 30vh;' : ''}
    @media (max-width: 600px) {
        top: -15vh;
    }
    margin-bottom: 13vh;
`;

const HeroText = styled.div`
    & > p {
        font-weight: 100;
        margin: 0;
        font-size: 7vmin;
        ${(props) => !props.scroll ? 
        'opacity: 1;' : 'font-size: 3vmin; opacity: 0;  text-align: left; margin-left: 20px; position: absolute; width: auto; left: 0; bottom: -10vmin;'}
        transition: opacity 300ms ease-in;
        will-change: opacity;
    }
    position: relative;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    & > h1 {
        font-weight: 600;
        margin: 0;
        transform: translateX(-50%) translateY(-62%);
        left: 50%;
        ${(props) => !props.scroll ? 
            'font-size: 14vmin;' : 'font-size: 6vmin;  padding: 0 20px; text-align: left; transform: translateX(0); left: 0; padding: 0 20px; transition: transform 200ms ease-out;'}
        top: 36%;
        will-change: transform;
    }

    & > * {
        text-align: center;
        width: 100vw;
        position: absolute;
        ${(props) => props.scroll ? 
            '' : ''}
    }
    width: 100%;
    ${p => !p.scroll ? 'height: 60vh;' : ''};

    @media (max-width: 1024px) {
        & > h1 {
            transform: translateX(-50%) translateY(-59%);
            top: 40%; 
            ${(props) => props.scroll ? 
                'transform: translateX(0); transition: transform 200ms ease-out;' : ''}          
        }
    }
`;

const PageContents = styled.div`
    ${(props) => props.scroll && !props.child ? 
    'transform: scale(1);' : !props.child ? 'transform: scale(0.5); bottom: 31vh; transition: transform 100ms ease-out; height: calc(85vh + 10vh);' : ''}
    width: 90vw; 
    height: 85vh;
    border-radius: 7vmin;
    background: #FC466B;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
    transition: transform 100ms ease-in;
    will-change: transform;
    & > * {
        ${(props) => props.scroll ? 'opacity: 1' : 'opacity: 0'}
        transition: opacity 500ms ease-in;
        will-change: opacity;
    }
    &:hover {
        ${p => !p.scroll ? 'transform: scale(0.6);' : ''}
    }
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ${p => p.child ? css`${SiblingPageContent}` : ''}
    order: 2;
    @media (max-width: 1024px) {
        ${(props) => props.scroll && !props.child ? 
            'order: 2;' : ""}
    }
`;

const ActiveContentWrapperAfter = `
    min-height: 90vw;
    bottom: -100vh;
    opacity: 0;
    z-index: 0;
    left: 63vw;
    display: none;
`;

const ActiveContentWrapperBefore = `
    min-height: 90vw;
    bottom: -100vh;
    opacity: 0;
    z-index: 0;
    left: -3vw;
    display: none;
`;

const SiblingPageContent = `
    margin: 30px 0;
    width: 90vw; 
    height: 85vh;
    border-radius: 7vmin;
`;

const ContentWrapper = styled.div`
    position: relative;
    margin-bottom: 60px;

    &:after {
        min-width: 30vw;
        background: #1f4037;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */        
        position: absolute;
        min-height: 60vw;
        top: 2vh;
        opacity: 0.4;
        z-index: 0;
        transition: min-height 200ms ease-in, bottom 0.5s ease-out, opacity 0.3s ease-out;
        will-change: min-height, bottom, opacity;
        right: 0;
        content: "";
        border-radius: 2vmin;
        ${p => p.scroll ? css`${ActiveContentWrapperAfter}` : ''}
    }

    &:before {
        min-width: 30vw;
        background: #FC466B;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */        
        position: absolute;
        min-height: 60vw;
        opacity: 0.5;
        top: 3vh;
        transition: min-height 200ms ease-in, bottom 0.8s ease-out, opacity 0.2s ease-out;
        will-change: min-height, bottom, opacity;
        z-index: 0;
        left: 0;
        content: "";
        border-radius: 2vmin;
        ${p => p.scroll ? css`${ActiveContentWrapperBefore}` : ''}
    }
    
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    height: auto;
    justify-content: center;

    & > section {
        ${p => p.scroll ? 'display: flex;' : 'display: none;'}
    }
`;

const Navigation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & > a {
        text-decoration: none;
        font-weight: lighter;
        font-size: 4vmin;
        opacity: 1;
        ${p => p.scroll ? 'opacity: 0;' : ''}
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

const FixedNavigation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & > a {
        text-decoration: none;
        font-weight: lighter;
        font-size: 6vmin;
    }

    opacity: 0;
    position: absolute;
    width: 50vw;
    right: -2vw;
    top: 24vh;
    transition: opacity 0.1s ease-out;
    will-change: opacity;
    ${p => p.scroll ? 'opacity: 1; transition: opacity 1s ease-in;' : ''}

    @media (max-width: 1024px) {
        display: none;
    }
`;

class Home extends PureComponent {
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
        const shrinkOn = 100;

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
            <PageContainer scroll={this.state.scroll}>
                <HeroText scroll={this.state.scroll}>
                    <h1>Allen Tsai</h1>
                    <p>Full Stack Developer</p>
                </HeroText>
                <Navigation scroll={this.state.scroll}>
                    <Link to="/exp">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/github">GitHub</Link>
                </Navigation>
                <FixedNavigation scroll={this.state.scroll}>
                    <Link to="/exp">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/github">GitHub</Link>
                </FixedNavigation>
            </PageContainer>
            <ContentWrapper scroll={this.state.scroll}>
    
            <PageContents scroll={this.state.scroll} >
                <InnerContent className={"colorChange"}><p>Contents</p></InnerContent>
            </PageContents>
            <SideMenu>
                <Container>
                    <Item>Project 1</Item>
                    <Item>Project 2</Item>
                    <Item>Project 3</Item>
                </Container>
            </SideMenu>  
            </ContentWrapper>
            <PageContents scroll child>
            <InnerContent><p>Contents</p></InnerContent>
            </PageContents>
            <PageContents scroll child>
            <InnerContent><p>Contents</p></InnerContent>
            </PageContents>   
            </>
        );
    }
};

const SideMenu = styled.section`
    height: auto;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const Container = styled.div`
    padding: 0 10px;
    @media (max-width: 1024px) {
        display: flex;
        justify-content: space-around;
        flex: 100%;
        align-items: center;
    }
`;

const Item = styled.span`
    display: block;
    cursor: pointer;
    border: 3px solid #405df9;
    box-shadow: inset 0px 0px 0px 2px #fbfbfb;
    box-sizing: border-box;
    background: #659999;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f4791f, #659999);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f4791f, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 10vh;
    height: 10vh;
    margin-bottom: 10px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`;

const InnerContent = styled.div`
    width: 85vw;
    height: 100%;
    border-radius: 4vmin;
    display: flex;

    @media (max-width: 1024px) {
    width: 100%;
    height: 80vh;  
    }
`;

export default Home;