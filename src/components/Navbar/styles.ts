import styled, { css } from 'styled-components';
import '../../Styles/fonts.css';

//Verificado propriedade para aplicar certas estilizações
type MenuBurguerProps = {
    showMenuBurguer: boolean;
};

export const Header = styled.header`
    background-color: #27374D;
`;

export const Wrapper = styled.div`
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1100px;
    margin: auto;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
`;

export const LogoName = styled.h1`
    font-family: 'Shippori Antique', sans-serif;
    color: White;
    font-size: 3rem;

    @media (max-width: 709px) {
        font-size: 1.8rem;
    }
`;

export const MenuSection = styled.div<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        position: ${showMenuBurguer ? '' : 'absolute'};
        top: ${showMenuBurguer ? '' : '0'};
        left: ${showMenuBurguer ? '' : '0'};
        width: ${showMenuBurguer ? '' : '100vw'};
        height: ${showMenuBurguer ? '' : '100vh'};
        background: ${showMenuBurguer ? '' : '#27374D'};
        /* background: ${showMenuBurguer ? '' : 'linear-gradient(150deg, #07c972, #359d9e)'}; */
        display: ${showMenuBurguer ? '' : 'flex'};
        align-items: ${showMenuBurguer ? '' : 'center'};
        justify-content: ${showMenuBurguer ? '' : 'center'};
    `}
`;

export const Nav = styled.nav<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        display: ${showMenuBurguer ? '' : 'block'};
        @media (max-width: 709px) {
            display: ${showMenuBurguer ? 'none' : ''};
        }
    `}
`;

export const StyledUl = styled.ul<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        display: ${showMenuBurguer ? 'flex' : 'block'};
        text-align: ${showMenuBurguer ? '' : 'center'};
    `}
`;

export const StyledLi = styled.li`
    list-style: none;
`;

export const StyledLink = styled.a<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        font-family: ${showMenuBurguer ? "'Roboto', sans-serif" : ''};
        text-decoration: none;
        color: #f8f9f7;
        font-size: ${showMenuBurguer ? '2.1rem' : '5rem'}; // 21px
        margin-left: ${showMenuBurguer ? '30px' : '0'};
        padding: ${showMenuBurguer ? '6px 10px' : ''};
        transition-duration: ${showMenuBurguer ? '' : '0.3s'};
        line-height: ${showMenuBurguer ? '' : '15rem'};

        &:hover {
            background-color: ${showMenuBurguer ? 'rgba(255, 255, 255, 0.151)' : ''};
            transition: ${showMenuBurguer ? '0.3s' : ''};
            border-radius: 5px;
        }
    `}
`;

//Estilos do menu burguer
export const MenuBurguer = styled.div<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        position: ${showMenuBurguer ? '' : 'absolute'};
        right: ${showMenuBurguer ? '' : '20px'};
        top: ${showMenuBurguer ? '' : '20px'};
    `}
    @media (max-width: 709px) {
        width: 40px;
        height: 30px;
    }
`;

export const MenuBurguerLine1 = styled.div<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        transform: ${showMenuBurguer ? '' : 'rotate(45deg) translate(7px, 7px)'};
    `}
    @media (max-width: 709px) {
        background-color: white;
        height: 5px; // altura de cada barrinha
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }
`;

export const MenuBurguerLine2 = styled.div<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        opacity: ${showMenuBurguer ? '' : '0'};
    `}
    @media (max-width: 709px) {
        background-color: white;
        height: 5px; // altura de cada barrinha
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }
`;

export const MenuBurguerLine3 = styled.div<MenuBurguerProps>`
    ${({ showMenuBurguer }) => css`
        transform: ${showMenuBurguer ? '' : 'rotate(-45deg) translate(8px, -9px)'};
    `}
    @media (max-width: 709px) {
        background-color: white;
        height: 5px; // altura de cada barrinha
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }
`;