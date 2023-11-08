import styled from 'styled-components'
import '../../Styles/fonts.css';

export const Wrapper = styled.div`
    // background-color: white;

    width: 90%;
    max-width: 1100px;
    margin: auto;
    text-align: center;
`;

export const SectionLogo = styled.div`
    /* background-color: aquamarine; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SectionWhatWeDo = styled.div`
    /* background-color: aquamarine; */
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SectionWhyChooseUs = styled.div`
    /* background-color: aquamarine; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
`

export const SectionContactUs = styled.div`
    /* background-color: aquamarine; */
    
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    /* background-color: cadetblue; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ImgContent = styled.div`
    /* background-color: cadetblue; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 480px) {
        display: none;
    }
`

export const StyledH1 = styled.h1`
    font-family: 'Shippori Antique', sans-serif;
    font-size: 3.4rem;
    margin: 8rem 0 1rem 0;
`

export const ImgContainer = styled.div`
    max-width: 270px;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%; /* A imagem ocupará 100% da largura da div */
    height: auto; /* A altura se ajustará automaticamente à largura, mantendo a proporção */
`;

export const TexContainer = styled.div`
    /* background-color: aquamarine; */

    display: flex;
    flex-direction: column;
    text-align: justify;
    max-width: 600px;
    gap: 2rem;
    padding: 3rem;
`

export const StyledH2 = styled.h2`
    font-size: 2rem;
    text-align: start;
    color: #27374D;
`