import { useState } from 'react';
import HeaderContent from '../../content/HeaderContent.json'
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
                    <LogoName>{HeaderContent.companyName}</LogoName>
                    <img src={HeaderContent.companyIcon} alt={HeaderContent.companyIconDescription} width={35} />
                </LogoWrapper>

                <MenuSection {...showMenuBurguerProps}>
                    <MenuBurguer onClick={handleShowMenuBurguer} {...showMenuBurguerProps}>
                        <MenuBurguerLine1 {...showMenuBurguerProps} />
                        <MenuBurguerLine2 {...showMenuBurguerProps} />
                        <MenuBurguerLine3 {...showMenuBurguerProps} />
                    </MenuBurguer>

                    <Nav {...showMenuBurguerProps}>
                        <StyledUl {...showMenuBurguerProps}>

                            {Object.entries(HeaderContent.actionLinks).map(([key, value]) => (
                                <StyledLi key={key}>
                                    <StyledLink href={value.endpoint} {...showMenuBurguerProps}>
                                        {value.name}
                                    </StyledLink>
                                </StyledLi>
                            ))}

                        </StyledUl>
                    </Nav>
                </MenuSection>
            </Wrapper>
        </Header>
    );
}

{/* 
-> A função Object.entries é uma função do JavaScript que retorna um array contendo os pares chave-valor de um objeto. 
Essa função retorna um array de arrays, onde cada subarray contém dois elementos: o primeiro elemento é a chave (string) e o segundo elemento é o valor associado a essa chave. A ordem dos pares no array é a mesma que a ordem em que as propriedades foram inseridas no objeto.
*/}