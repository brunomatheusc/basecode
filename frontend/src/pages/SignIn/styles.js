import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;
    /* background: linear-gradient(-90deg, #c1c1c1, #1a1a1a); */
    background-color: #ffa785;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 50%;
    background-color: #fff;
    min-height: 400px;
    border-radius: 4px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        padding: 10px;
        color: #000;
    }
`;