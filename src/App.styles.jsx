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
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
        overflow-x:hidden;
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
        margin: 0 0 20px;
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
        list-style: none;
    }
    //represent active state of the link
    .active__link {
	    color: ${props => props.theme.Primary};
	    font-weight: 700;
    }
`;

export default GlobalStyle;
