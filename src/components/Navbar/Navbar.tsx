import React, { useState, useEffect } from 'react';
import HeaderContent from '../../content/HeaderContent.json'
import {
    Header,
    Wrapper,
    LogoContainer,
    Nav,
    MenuSection,
    MenuBurguer,
    MenuBurguerLine1,
    MenuBurguerLine2,
    MenuBurguerLine3
} from './styles'

interface NavbarProps {
    // Props do seu Navbar, se houver
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);
    const [showLinkBurguer, setShowLinkBurguer] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            // Atualiza o estado com base na largura da tela
            setShowBurgerMenu(window.innerWidth <= 768);
        };

        // Adiciona um ouvinte de evento para lidar com alterações de tamanho de tela
        window.addEventListener('resize', handleResize);

        // Chama handleResize no início para definir o estado inicial
        handleResize();

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // O array vazio assegura que o efeito só é executado uma vez no início

    return (
        <div>
            {showBurgerMenu ? (
                // Renderiza o menu de hambúrguer se a largura da tela for menor ou igual a 768px
                <Header>
                    <Wrapper>
                        <LogoContainer>
                            {/* <p>{HeaderContent.companyName}</p> */}
                            <p>sample<span>TRAK</span></p>
                            <img src={HeaderContent.companyIcon} alt={HeaderContent.companyIconDescription} />
                        </LogoContainer>
                        <MenuSection>
                            <MenuBurguer onClick={() => setShowLinkBurguer(false)}>
                                <MenuBurguerLine1 />
                                <MenuBurguerLine2 />
                                <MenuBurguerLine3 />
                            </MenuBurguer>
                        </MenuSection>
                    </Wrapper>
                </Header>
            ) : (
                // Renderiza o navbar normalmente se a largura da tela for maior que 768px
                <Header>
                    <Wrapper>
                        <LogoContainer>
                            {/* <p>{HeaderContent.companyName}</p> */}
                            <p>sample<span>TRAK</span></p>
                            <img src={HeaderContent.companyIcon} alt={HeaderContent.companyIconDescription} />
                        </LogoContainer>
                        <Nav>
                            <ul>

                                {Object.entries(HeaderContent.actionLinks).map(([key, value]) => (
                                    <li key={key}>
                                        <a href={value.endpoint}>
                                            {value.name}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </Nav>
                    </Wrapper>
                </Header>
            )}
        </div>
    );
};

export default Navbar;