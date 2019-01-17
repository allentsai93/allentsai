import React, { Component } from 'react';
import styled, {css} from 'styled-components';

class ModeToggler extends Component {
    render() {
        return (
            <>
                <div>Toggle</div>
                {this.props.children}
            </>
        )
    }
}

export default ModeToggler;