import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 6.5rem;
    background-color: #27374D;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

export const Wrapper = styled.div`
    /* background-color: darkblue; */
    display: flex;
    height: 100%;
    width: 90%;
    max-width: 1100px;
    margin: auto;  
`;



export const LogoContainer = styled.div`
    /* background-color: darksalmon; */
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    gap: 1.2rem;

    img {
        width: 6rem;
    }

    p {
        color: white;
        font-size: 2.5rem;
    }

    span {
        color: #d38c00;
    }
`;

export const Nav = styled.nav`
    /* background-color: chartreuse; */
    display: flex;
    align-items: center;
    justify-content: end;
    width: 50%;
    height: 100%;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    ul li {
        list-style: none;
        margin: 0 0 0 3rem;
        padding: 1rem;
        
        &:hover {
            background: #d38c00;
            border-radius: 0.6rem;
        }
    }

    ul li a {
        text-decoration: none;
        color: white;
    }
`;

export const MenuSection = styled.div`
        /* position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #27374D;
        /* background: linear-gradient(150deg, #07c972, #359d9e)'}; */
        display: flex;
        align-items: center;
        justify-content: center; */
`;

export const MenuBurguer = styled.div`

        position: absolute;
        right: 20px;
        top: 20px;

    @media (max-width: 709px) {
        width: 40px;
        height: 30px;
    }
`;

export const MenuBurguerLine1 = styled.div`
            transform: rotate(45deg) translate(7px, 7px);
    @media (max-width: 709px) {
        background-color: white;
        height: 5px; // altura de cada barrinha
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }
`;

export const MenuBurguerLine2 = styled.div`
            opacity: 0;
    @media (max-width: 709px) {
        background-color: white;
        height: 5px; // altura de cada barrinha
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }
`;

export const MenuBurguerLine3 = styled.div`
            transform: rotate(-45deg) translate(8px, -9px);
    @media (max-width: 709px) {
        background-color: white;
        height: 5px; // altura de cada barrinha
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }
`;