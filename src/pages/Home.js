import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';

const PageContainer = styled.div`
    min-width: 100vw;
    min-height: 40vh;
    align-items: center; 
    flex-flow: column wrap;
    justify-content: center;
    transition: opacity 200ms linear;
    will-change: opacity;
    z-index: 2;

    ${p => p.scroll ? 'opacity: 0;' : 'opacity: 1;'}
`;

const HeroText = styled.div`
    & > p {
        font-weight: 100;
        margin: 0;
        font-size: 7vmin;
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
        font-size: 14vmin;
        line-height: 12vmin;
    }
    width: 100%;
    height: 50vmin;

`;

const PageContents = styled.div`
    ${(props) => props.scroll && !props.child ? 
    'transform: scale(1);' : !props.child ? 'transform: scale(1.1); bottom: -5vh; transition: transform 100ms ease-out; height: calc(85vh + 10vh);' : ''}
    width: 85vw; 
    transform-origin: top;
    height: 85vh;
    border-radius: 7vmin;
    // background: #FC466B;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to right, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
    box-shadow: 0px 0px 22px 3px rgba(0,0,0,0.28);
    transition: transform 100ms ease-in;
    will-change: transform;
    & > * {
        ${(props) => props.scroll ? 'opacity: 1' : 'opacity: 0'}
        transition: opacity 500ms ease-in;
        will-change: opacity;
    }
    // &:hover {
    //     ${p => !p.scroll ? 'transform: scale(0.6);' : ''}
    // }
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

const SiblingPageContent = `
    margin: 30px 0;
    width: 90vw; 
    height: 85vh;
    border-radius: 7vmin;
`;

const ContentWrapper = styled.div`
    position: relative;
    margin-bottom: 60px;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    height: auto;
    justify-content: space-evenly;
    width: 100%;
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
    padding: 1vmax 3vmax;
    width: 100%;
    display: flex;
    align-items: center;
    
    z-index: 2;
    & a {
        text-decoration: none;
        margin: 0 5px;
        &:hover {
            transform: scale(1.1);
            transition: transform 50ms ease-in;
        }
        ${p => p.scroll ? 'font-size: 13px;' : ''}
    }

    & a > span {
        ${p => p.scroll ? 'width: 50px; height: 50px; font-size: 25px;' : ''}
    }

    opacity: 1;
    position: sticky;
    top: 0;
    will-change: opacity;
    & .navHeader {
        margin: 0;
        font-size: 2rem;
        transition: opacity 200ms linear;
        ${p => p.scroll ? 'flex-basis: auto; opacity: 1;' : 'transition: opacity 50ms linear; flex-basis: 0; opacity: 0; flex-grow: 0; width: 0; height: 0;'}
    }
    ${p => p.scroll ? 'box-shadow: 0 5px 8px 0px rgba(0,0,0,0.5); background-color: white; justify-content: space-between;' : 'justify-content: flex-end;'};
    & * {
        font-size: 1rem;
    }

    & > .iconContainer {
        display: flex;
        align-items: center;
        position: relative;
        right: 50%;
        transform: translateX(50%);
        ${p => p.scroll ? 'transform: translateX(0); right: 0;' : 'padding: 10px;background-color: rgba(0,0,0,0.1); border-radius: 29px;'};
        transition: right 200ms ease-in, transform 400ms ease-in, background-color 200ms linear;
        will-change: right, transform, background-color;
    }
    text-align: center;
    
`;

class Home extends PureComponent {
    state = {
        scroll: false,
        showCode: false
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.getWindowHeight);
     }
   
    componentWillUnmount = () =>{
        window.removeEventListener('scroll', this.getWindowHeight);
    }
    
    getWindowHeight = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop
        const shrinkOn = 400;

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

    codeToggle = () => {
        const currState = this.state.showCode;
        this.setState({showCode: !currState});
    }

    render() {
        return (
            <>
            <PageContainer scroll={this.state.scroll}>
                <HeroText>
                    <h1>Test Test</h1>
                    <p>Lorem Ipsum Test</p>
                    <CodeToggle onClick={this.codeToggle}>&#60;/&#62;</CodeToggle>
                </HeroText>

            </PageContainer>
            <CodeContainer show={this.state.showCode}></CodeContainer>
            <FixedNavigation scroll={this.state.scroll} className={"fixedNav"}>
                    <h1 className={"navHeader"}>Test Test</h1>
                    <div className={"iconContainer"}>
                    <Link to="/projects"><NavigationIconLink backgroundImg={"linear-gradient(to right, #fc466b, #3f5efb);"}>P</NavigationIconLink>Projects</Link>
                    <Link to="/exp"><NavigationIconLink backgroundImg={"linear-gradient(to right, #11998e, #38ef7d);"}>Exp</NavigationIconLink>Experience</Link>
                    <Link to="/github"><NavigationIconLink backgroundImg={"linear-gradient(to right, #0f2027, #203a43, #2c5364);"}>GH</NavigationIconLink>GitHub</Link>
                    </div>
            </FixedNavigation>

            <ContentContainer scroll={this.state.scroll}> 
            <ContentWrapper scroll={this.state.scroll}>
            <PageContents scroll={this.state.scroll} >
                <InnerContent className={"colorChange"}><p>Contents</p></InnerContent>
            </PageContents>
            <SideMenu scroll={this.state.scroll}>
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
            </ContentContainer>  
            </>
        );
    }
};

const NavigationIconLink = styled.span`
    width: 90px;
    height: 90px;
    border-radius: 26%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: white !important;
    background: ${p => p.backgroundImg ? p.backgroundImg : 'none;'};
`;

const CodeToggle = styled.span`
border-radius: 6vmin;
border: 1px solid #ebebeb;
min-width: 75px;
text-align: center;
padding: 5px 10px;
font-size: 2vmin;
margin-top: 6vmin;
`;

const CodeContainer = styled.section`
    ${p => p.show ? 'min-height: 70vh; opacity: 1;' : 'min-height: 0; opacity: 0;'};
    transition: opacity 400ms ease-in, min-height 300ms linear;
    will-change: opacity, min-height;
    width: 105%;
    box-shadow: inset 0px 6px 41px 4px rgba(0,0,0,0.46);
    background-color: #ebebeb;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    align-items: center;
    ${p => p.scroll ? 'margin-top: 100px;' : ''}
`;

const SideMenu = styled.section`
    height: auto;
    @media (max-width: 1024px) {
        width: 100%;
    }
    transition: opacity 300ms linear;
    ${p => p.scroll ? 'opacity: 1;' : 'opacity: 0;'}
`;

const Container = styled.div`
    padding: 0 10px;
    @media (max-width: 1024px) {
        display: flex;
        justify-content: space-around;
        flex: 100%;
        align-items: center;
        margin-bottom: 6vmin;
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
    width: 93%;
    height: 93%;
    border-radius: 4vmin;
    display: flex;
`;

export default Home;