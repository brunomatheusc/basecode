import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;

export const Input = styled.input`
    height: 45px;
    width: 250px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    padding: 10px;

    & + input {
        margin: 20px;
    }
`;

export const Button = styled.button`
    height: 45px;
    width: 250px;
    border: 1px solid #000;
    background-color: ${({ bgColor }) => bgColor ? bgColor : "#000" };
    color: #fff;
    border-radius: 4px;
    padding: 10px;
`;