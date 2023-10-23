import { useState } from 'react';
import {
    Header,
    Wrapper,
    StyledH1,
    MenuBurguer,
    MenuBurguerLine1,
    MenuBurguerLine2,
    MenuBurguerLine3,
    Nav,
    StyledUl,
    StyledLi,
    StyledLink,
    MenuSection
} from './styles'

export default function Navbar() {
    const [showMenuBurguer, setShowMenuBurguer] = useState(true);

    const handleShowMenuBurguer = () => {
        setShowMenuBurguer(!showMenuBurguer);
    }

    return (
        <Header>
            <Wrapper>
                <div className='logo'>
                    <StyledH1>SampleTrak</StyledH1>
                </div>

                <MenuSection showMenuBurguer={showMenuBurguer}>
                    <MenuBurguer onClick={handleShowMenuBurguer} showMenuBurguer={showMenuBurguer}>
                        <MenuBurguerLine1 showMenuBurguer={showMenuBurguer} />
                        <MenuBurguerLine2 showMenuBurguer={showMenuBurguer} />
                        <MenuBurguerLine3 showMenuBurguer={showMenuBurguer} />
                    </MenuBurguer>

                    <Nav showMenuBurguer={showMenuBurguer}>
                        <StyledUl showMenuBurguer={showMenuBurguer}>
                            <StyledLi>
                                <StyledLink href="/" showMenuBurguer={showMenuBurguer}>Home</StyledLink>
                            </StyledLi>

                            <StyledLi>
                                <StyledLink href="#" showMenuBurguer={showMenuBurguer}>Login</StyledLink>
                            </StyledLi>
                        </StyledUl>
                    </Nav>
                </MenuSection>
            </Wrapper>
        </Header>
    )
}
