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
    padding-bottom: 50px;
`

export const SectionForm =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    padding-bottom: 50px;
`;

export const Content = styled.div`
    /* background-color: cadetblue; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ImgContent = styled.div`
    /* background-color: cadetblue; */

    display: flex;
    flex-direction: column;
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
    max-width: 400px;
    overflow: hidden;
`

export const ImgContainerText = styled.div`
    max-width: 250px;
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

export const FormTitle = styled.h2`
    color: black;
    font-size: 1.5em;
    margin-bottom: 10px;
    padding-bottom: 10px;
`;

export const FormSubtitle = styled.p`
    margin: 15px 0 20px 0;
    color: black;
`;

export const StyledForm = styled.form`
    max-width: 500px;
    margin: auto;
    background: linear-gradient(90deg, #07c97262, #359c9e41);
    overflow: hidden;
    padding: 20px;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    width: 100%;
    margin-bottom: 15px;
    display: flex;
`;

export const StyledInput = styled.input`
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 7px 14px 9px;
    transition: 0.4s;
`;

export const StyledTextArea = styled.textarea`
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 7px 14px 9px;
    transition: 0.4s;
    resize: none !important;
`;

export const StyledButton = styled.button`
    background-color: #26BC62;
    padding: 0.5em 1.3em;
    color: white;
    font-size: 1.2em;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const StyledImg = styled.img`
    max-width: 400px;
    overflow: hidden;
`;