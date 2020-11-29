import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
	text-align: center;
`;

const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior:smooth;
         //Scroll bar Global Style
        /* width */
        ::-webkit-scrollbar {
            width: 7px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #e8eaed;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #97989b;
            border-radius: 1em;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #323335;
        }
    }
    body{
        font-family: 'Mulish', sans-serif;
        background: ${props => props.theme.White} ;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
        overflow-x:hidden;
        transition: color 2s linear;
    }
    /* selection for text */
    ::selection{
        background-color:#e45f78;
        color: white;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        margin: 0 0 15px;
        color: ${props => props.theme.Black}
    }
    h1{
        font-size: 32px;
    }
    h2{
        font-size: 25px;
    }
    h3{
        font-size: 20px;
    }
    h4{
        font-size: 16px;
    }
    h5{
        font-size: 12px;
    }
    h6{
        font-size: 8px;
    }

    p{
        line-height: 22px;
        margin: 0 0 20px;
        color: ${props => props.theme.Black}
    }

    a{
        color: ${props => props.theme.Black};
        text-decoration: none;
        outline:none;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover,:focus{
            color: ${props => props.theme.Primary};
        } 
    }
    //list styling
    ul,ol{
        padding:0;
        margin: 16px 0;
        list-style: none;
    }
    //represent active state of the link
    .active__link {
	    color: ${props => props.theme.Primary};
	    font-weight: 700;
    }
    .sun{
        box-shadow: 0px 0px 20px 0px #ffe819;
        background: #ffff0057;
        color:#ffeb3b;
    }
    .moon{
        color:#918e80;
    }
    .avatar__image__loading{
        position: absolute;
        width: 100px;
        color: crimson;
    }
    .page__loading{
        color: ${props => props.theme.Loader};
        width:fit-content;
    }
`;

export default GlobalStyle;
