import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import Taskbar from './Home/Taskbar';
import highlightsimg from './Home/highlights.JPG';
import bubble from './Home/bubble.svg';
import heart from './Home/heart.svg';
import marker from './Home/marker.svg';
import send from './Home/send.svg';

const PageContainer = styled.div`
    min-width: 100vw;
    height: auto;
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
    height: 60vh;

`;

const PageContents = styled.div`
    ${(props) => props.scroll && !props.child ? 
    'transform: scale(1);' : !props.child ? 'transform: scale(0.7); bottom: -5vh; transition: transform 100ms ease-out; height: calc(85vh + 10vh);' : ''}
    width: 90vw; 
    transform-origin: top;
    height: 85vh;
    border-radius: 3vmin;
    box-shadow: 0px 0px 22px 3px rgba(0,0,0,0.28);
    transition: transform 100ms ease-in;
    will-change: transform;
    & > :nth-child(n+3) {
        ${(props) => props.scroll ? 'opacity: 1' : 'opacity: 0'}
        transition: opacity 500ms ease-in;
        will-change: opacity;
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
        
        ${(props) => !props.scroll ? 
            'transform: scale(0.8);' : ""}
    }

    @media (max-width: 700px) {
        border-radius: 7vmin;
        border: 2vmin solid black;
    }

    overflow: hidden;
`;

const SiblingPageContent = `
    margin: 30px 0;
    width: 90vw; 
    height: 85vh;
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
    padding: 1vh 3vmax;
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
        ${p => p.scroll ? 'width: 7vh; height: 7vh; font-size: 3vh;' : ''}
    }

    opacity: 1;
    position: fixed;
    bottom: 10px;
    will-change: opacity;
    justify-content: center;
    & .navHeader {
        margin: 0;
        font-size: 3vh;
        opacity: 1;
        transition: opacity 200ms linear;
        ${p => p.scroll ? 'flex-basis: auto;' : 'transition: opacity 50ms linear; flex-basis: 0; opacity: 0; flex-grow: 0; width: 0; height: 0;'}
    }
    ${p => p.scroll ? 'flex-flow: column wrap;' : ''};
    & * {
        font-size: 1rem;
    }

    & > .iconContainer {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: rgba(0,0,0,0.1);
        border-radius: 29px;
        ${p => p.scroll ? 'transform: scale(1);' : 'transform: scale(1.2);'};
        transition: transform 200ms ease-out;
        will-change: transform;
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
        const shrinkOn = 250;

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
            <ContentContainer scroll={this.state.scroll}> 
            <PageContents scroll={this.state.scroll} >
                <Taskbar>
                    <p>Projects</p>
                </Taskbar>
                <LoadingElement load={this.state.scroll}><p>Projects</p></LoadingElement>
                <InnerContent className={"colorChange"}>
                    <SideMenu scroll={this.state.scroll}>
                        <SideMenuTopBar>
                            <p>Projects</p>
                        </SideMenuTopBar>
                        <Container>
                            <CircleItem>
                                <Item />
                                <p>Project</p>
                            </CircleItem>
                            <CircleItem>
                                <Item />
                                <p>Project</p>
                            </CircleItem>
                            <CircleItem>
                                <Item />
                                <p>Project</p>
                            </CircleItem>
                        </Container>
                    </SideMenu>
                    <ContentSection>
                        
                        <GramContent>
                        <GramImage>
                            <GramOptions>
                            <GramCircle>
                                <Item />
                                <span className={"gramTitle"}>
                                <p>project_title</p>
                                </span>
                        </GramCircle>
                            </GramOptions>
                            <GramOptions bottom>
                                <div className={'options'}>
                                <img src={heart} alt={'like'}/>
                                <img src={bubble} alt={'chat'}/>
                                <img src={send} alt={'send'}/>
                                </div>
                                <div>
                                <img src={marker} alt={'marker'}/>
                                </div>
                            </GramOptions>
                        </GramImage>
                        <GramText>
                        <p><strong>project_name1</strong> Highlights</p>
                        <span>Load site in a new tab</span>
                        <p><strong>url</strong> https://nameless-reef-38457.herokuapp.com</p>
                        <p><strong>_github</strong> 🔥 https://github.com/allentsai93/Highlights-Fullstack 🔥</p>
                        <p><strong>stackusedforthis</strong> mongodB, node, express! ❤️❤️❤️</p>
                        </GramText>
                        </GramContent>
                    </ContentSection>  
                    
                </InnerContent>
            </PageContents>
            <PageContents scroll child>
            <InnerContent><p>Contents</p></InnerContent>
            </PageContents>
            <PageContents scroll child>
            <InnerContent><p>Contents</p></InnerContent>
            </PageContents> 
            </ContentContainer>
            <FixedNavigation scroll={this.state.scroll} className={"fixedNav"}>
                    <h1 className={"navHeader"}>Test Test</h1>
                    <div className={"iconContainer"}>
                    <Link to="/projects"><NavigationIconLink backgroundImg={"linear-gradient(to right, #fc466b, #3f5efb);"}>P</NavigationIconLink>Projects</Link>
                    <Link to="/exp"><NavigationIconLink backgroundImg={"linear-gradient(to right, #11998e, #38ef7d);"}>Exp</NavigationIconLink>Experience</Link>
                    <Link to="/github"><NavigationIconLink backgroundImg={"linear-gradient(to right, #0f2027, #203a43, #2c5364);"}>GH</NavigationIconLink>GitHub</Link>
                    </div>
            </FixedNavigation>  
            </>
        );
    }
};

const GramOptions= styled.div`
    ${p => p.bottom ? 'bottom: 0; border-top: 1px solid #dcd6d6; border-bottom: none;' : 'top: 0; border-bottom: 1px solid #dcd6d6; border-top: none;'}
    position: absolute;
    width: 100%;
    height: 5vh;
    background-color: white;
    display: flex;
    flex-flow: row wrap;
    padding: 0 1vmin;
    align-items: center;
    justify-content: space-between;
    & {
        color: white;
    }

    & .options {

    }
`;


const GramImage = styled.div`
    background: url('${highlightsimg}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 44%;
    position: relative;
    border: 1px solid #dcd6d6;
    @media (max-width: 700px) {
        background-color: white;
        border-left: none;
        border-right: none;
    }
`;

const GramText = styled.div`
    padding: 0 2vmin;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    & > p {
        margin: 5px 0;
    }
    @media (max-width: 700px) {
        background-color: white;
    }

    & > span {
        font-weight: 600;
        color: #5e5a5a;
        cursor: pointer;
    }
`;

const GramContent = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    & > div {
        flex: 50%;
    }
    overflow: hidden;
    border-radius: 1vmin;

    @media (max-width: 700px) {
        flex-flow: column wrap;
    }
    
`;

const ContentSection = styled.section`
    height: 63vh;
    width: 100%;
    padding: 3vmin;
    padding-top: 0;
    overflow: auto;
    display: flex;
    justify-content: center;
    @media (max-width: 700px) {
        padding: 0;
    }
`;

const SideMenuTopBar = styled.div`
    & > p {
        margin: 5px;
        font-family: 'Grand Hotel', cursive;
        font-size: 4vh;
    }
    width: 100%;
    text-align: center;
`;

const CircleItem = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    & > p {
        margin: 0;
        font-size: 1.5vh;
        text-transform: lowercase;
        margin-top: 3px;
    }
    margin: 10px 0;
`;

const LoadingElement = styled.div`
    position: absolute;
    top: 2vmax;
    left: 0;
    height: 0.3vmax;
    background: rgb(157,213,58); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(157,213,58,1) 0%, rgba(161,213,79,1) 50%, rgba(128,194,23,1) 51%, rgba(124,188,10,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(157,213,58,1) 0%,rgba(161,213,79,1) 50%,rgba(128,194,23,1) 51%,rgba(124,188,10,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(157,213,58,1) 0%,rgba(161,213,79,1) 50%,rgba(128,194,23,1) 51%,rgba(124,188,10,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9dd53a', endColorstr='#7cbc0a',GradientType=0 ); /* IE6-9 */
    min-width: 0;
    opacity: 1;
    transition: min-width 400ms ease-in, opacity 200ms ease-out 500ms;
    will-change: min-width, opacity;
    ${p => p.load ? 'min-width: 100%; opacity: 0;' : 'transition: none;' }
    & > p {
        display: none;
    }
    @media (max-width: 700px) {
        background: #aa4b6b;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        top: 0;
        height: 100%;
        z-index: 1;
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;  
        & > p {
            display: block;
            font-family: 'Grand Hotel', cursive;
            font-size: 8vmax;
            color: white;
        }
        ${p => p.load ? 'z-index: -1;' : 'transition-delay: 1s;' }
    }
    
    
`;

const NavigationIconLink = styled.span`
    width: 10vh;
    height: 10vh;
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
    flex-flow: column wrap;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #f7f7f7;
    @media (max-width: 700px) {
        padding-top: 3vmax;
    }
    transition: opacity 300ms linear;
    ${p => p.scroll ? 'opacity: 1;' : 'opacity: 0;'}
`;

const Container = styled.div`
    padding: 0 10px;
    text-align: center;
    @media (max-width: 1024px) {

    }
    flex-flow: row wrap;
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: 0.2vmin solid lightgrey;
    border-top: 0.2vmin solid lightgrey;
    align-items: center;
    background-color: #ffffffeb;
    @media (max-width: 700px) {
        flex-flow: row wrap;
    }
`;

const Item = styled.span`
    display: block;
    cursor: pointer;
    border: 2px solid #f03ae270;
    box-shadow: inset 0px 0px 0px 2px #fbfbfb;
    box-sizing: border-box;
    background: #659999;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f4791f, #659999);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f4791f, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 6vh;
    height: 6vh;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;

    &:hover {
        opacity: 1;
    }
`;

const InnerContent = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4vmin;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    top: 2vmax;
    @media (max-width: 700px) {
        top: 0;
    }
`;
const GramCircle = styled(CircleItem)`
    flex-flow: row wrap;
    & p {
        margin: 0;
        margin-left: 10px;
    }

    & .gramTitle {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: flex-start;
        
        & p {
            font-weight: 600;
        }
    }

    & ${Item} {
        width: 4vh;
        height: 4vh;
        border-width: 1px;
    }

`;

export default Home;