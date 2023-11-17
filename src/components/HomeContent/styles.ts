import styled from 'styled-components'
import '../../Styles/fonts.css';

export const Wrapper = styled.div`
    /* background-color: cornflowerblue; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4rem 4rem;
    gap: 4rem;

    @media (max-width: 709px) {
        gap: 1rem;
        padding: 2rem 0;
    }
`;

export const CompanyLogoSession = styled.section`
    /* background-color: teal; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0;
    height: 30rem;
    width: 100%;
    /* background: linear-gradient(90deg, #07c972, #359d9e); */

    @media (max-width: 709px) {
        height: 30rem;
        padding: 2rem 2rem;
    }
`

export const CompanyName = styled.h1`
    font-family: 'Shippori Antique', sans-serif;
    margin-bottom: 1rem;
    font-size: 7rem;
    text-align: start;
    color: #27374D;

    @media (max-width: 709px) {
        font-size: 4rem;
    }
`

export const CompanySlogan = styled.p`
    color: #27374D;
    font-size: 2.5rem;

    @media (max-width: 709px) {
        font-size: 1.7rem;
        text-align: center;
    }
`;

export const Section = styled.section<{ 
        $flexDirection?: string; 
        $sectionHeight?: string; 
        $sectionHeightCell?: string;}>`
    background-color: aquamarine;
    
    display: flex;
    flex-direction: ${props => props.$flexDirection ?? "row"};
    align-items: center;
    justify-content: center;
    height: ${props => props.$sectionHeight ?? "40rem"};
    width: 100%;
    padding: 0 3rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    border-radius: 1rem;
    max-width: 80%;

    @media (max-width: 709px) {
        width: 100%;
        height: ${props => props.$sectionHeightCell ?? "30rem"};
        margin: 0;
        padding: 2rem 2rem;
        box-shadow: none;
        border-radius: 0;
    }
`

export const Imgcontainer = styled.div`
    /* background-color: chocolate; */

    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 709px) {
        display: none;
    }
`;

export const Image = styled.img<{ $maxSize?: string; }>`
    max-width: ${props => props.$maxSize ?? "350px"};
    height: ${props => props.$maxSize ?? "350px"};
`;

export const TextContainer = styled.div`
    /* background-color: mediumorchid; */

    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem;

    @media (max-width: 709px) {
        width: 100%;
        padding: 0;
    }
`;

export const TextTitle = styled.h2`
    /* background-color: lime; */
    color: #27374D;
    padding-bottom: 2.5rem;
    text-align: start;

    @media (max-width: 709px) {
        font-size: 2.5rem;
    }
`

export const TextContent = styled.p`
    /* background-color: cadetblue; */
    text-align: justify;

    @media (max-width: 709px) {
        font-size: 1.5rem;
    }
`;


// Estilos formulário, posteriormente será separado em um componente
export const FormContainer = styled.div`
    /* background-color: linen; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 3rem;

    @media (max-width: 709px) {
        width: 100%;
        padding: 0;
    }
`;

export const Form = styled.form`
    background-color: #DDE6ED;
    max-width: 45rem;
    padding: 3rem 2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 709px) {
        padding: 2rem 2rem;
        width: 100%;
        height: 100%;
        padding: 2rem 2rem;
    }
`;

export const FormTitle = styled.h3`
    color: #27374D;
    margin-bottom: 1rem;
    font-size: 2.4rem;

    @media (max-width: 709px) {
        font-size: 2.5rem;
    }
`;

export const FormSubtitle = styled.p`
    margin: 1.5rem 0 2rem 0;

    @media (max-width: 709px) {
        font-size: 1.5rem;
        text-align: left;
    }
`;

export const InputLabel = styled.label`
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;

    @media (max-width: 709px) {
        margin-bottom: 1rem;
    }
`;

export const FormInput = styled.input`
    color: #333;
    width: 100%;
    height: 4.7rem;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 709px) {
        height: 4rem;
    }
`;

export const StyledTextArea = styled.textarea`
    color: #333;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 709px) {
        padding: 1rem 1.4rem;
    }
`;

export const StyledButton = styled.button`
    background-color: #26BC62;
    padding: 0.9rem 1.3rem;
    color: white;
    font-size: 1.9rem;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    width: 100%;
    font-family: 'Roboto', sans-serif;

    &:hover {
        background-color: #26BF92;
    }

    @media (max-width: 709px) {
        font-size: 1.6rem;
    }
`;
