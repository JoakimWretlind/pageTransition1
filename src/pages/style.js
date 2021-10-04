import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &#one{
        background: maroon;
    }
    &#two{
        background: mediumpurple;
    }
`;

export const Header = styled.h1`
    color: #fff;
    font-size: clamp(3rem, 7vw, 5rem);
    letter-spacing: .3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
`;

export const Button = styled(Link)`
    border: .1rem solid #fff;
    color: #fff;
    background: transparent;
    outline: none;
    padding: .4rem 1.2rem;
    font-size: clamp(1.2rem, 6vw, 2rem);
    transition: .25s ease-out;
    &:hover{
        background: #f1f1f1;
        color: #333;
        border: .1rem solid transparent;
        transform: scale(.97);
    }
`;

