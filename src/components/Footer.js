import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    margin-top: 40vh;
    color: #dcdcdc;
    text-align: center;
    a {
        color: #1fa91f;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                Built with
                  <span style={{ color: 'red' }}> &hearts; </span>
                (and React.js) by
                  <a href="//seanthenderson.com" target="_blank"> Sean T Henderson</a>
            </FooterWrapper>
        );
    }
}

export default Footer;