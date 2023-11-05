import { useState } from 'react';
import Logo from '../../assets/box-icon.png';
import {
    Header,
    Wrapper,
    LogoWrapper,
    LogoName,
    MenuBurguer,
    MenuBurguerLine1,
    MenuBurguerLine2,
    MenuBurguerLine3,
    Nav,
    StyledUl,
    StyledLi,
    StyledLink,
    MenuSection,
} from './styles';

export default function Navbar() {
    const [showMenuBurguer, setShowMenuBurguer] = useState(true);

    const handleShowMenuBurguer = () => {
        setShowMenuBurguer(!showMenuBurguer);
    };

    // é como a caixa que contém a propriedade showMenuBurguer (true ou false)
    // utilizado "...showMenuBurguerProps" para "espalhar" a propriedade showMenuBurguer em várias partes do código, para que elas possam usá-la sem precisar escrever a mesma coisa várias vezes.
    const showMenuBurguerProps = {
        showMenuBurguer
    };

    return (
        <Header>
            <Wrapper>
                <LogoWrapper>
                    <LogoName>SampleTrak</LogoName>
                    <img src={Logo} alt="Logo" width={35} />
                </LogoWrapper>

                <MenuSection {...showMenuBurguerProps}>
                    <MenuBurguer onClick={handleShowMenuBurguer} {...showMenuBurguerProps}>
                        <MenuBurguerLine1 {...showMenuBurguerProps} />
                        <MenuBurguerLine2 {...showMenuBurguerProps} />
                        <MenuBurguerLine3 {...showMenuBurguerProps} />
                    </MenuBurguer>

                    <Nav {...showMenuBurguerProps}>
                        <StyledUl {...showMenuBurguerProps}>
                            <StyledLi>
                                <StyledLink href="/" {...showMenuBurguerProps}>
                                    Home
                                </StyledLink>
                            </StyledLi>
                            <StyledLi>
                                <StyledLink href="#" {...showMenuBurguerProps}>
                                    Login
                                </StyledLink>
                            </StyledLi>
                        </StyledUl>
                    </Nav>
                </MenuSection>
            </Wrapper>
        </Header>
    );
}
