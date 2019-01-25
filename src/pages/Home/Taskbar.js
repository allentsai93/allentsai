import React from 'react';
import styled, { css } from 'styled-components';

const StyledTaskbar = styled.div`
    content: "";
    display: flex;
    position: absolute;
    width: 100%;
    top: 0;
    height: 2vmax;
    background: radial-gradient(7px at 24px 50%, #ff5e57 0px, #ff635a 5px, #fd5249 6px, rgba(255, 255, 255, 0) 7px), radial-gradient(7px at 44px 50%, #ffbd2e 0px, #ffc42f 5px, #fcb91b 6px, rgba(255, 255, 255, 0) 7px), radial-gradient(7px at 64px 50%, #cfcfcf 0px, #d3d3d3 5px, #c6c6c6 6px, rgba(255, 255, 255, 0) 7px), linear-gradient(to top, #cccccc 0%, #d6d6d6 1px, #ebebeb 100%);
    z-index: 2;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        & * {
            display: none;
        }
    }
`;

const Taskbar = (props) => {
    return (
        <StyledTaskbar>
            {props.children}
        </StyledTaskbar>
    )
}

export default Taskbar;