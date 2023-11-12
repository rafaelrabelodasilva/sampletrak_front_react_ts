import styled from 'styled-components'
import '../../Styles/fonts.css';

export const Wrapper = styled.div`
    /* background-color: cornflowerblue; */

    width: 90%;
    max-width: 1100px;
    margin: auto;
    text-align: center;
    padding: 3rem 0 3rem 0rem;
`;

export const SectionLogo = styled.section`
    /* background-color: teal; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0;
`

export const StyledH1 = styled.h1`
    font-family: 'Shippori Antique', sans-serif;
    font-size: 3.4rem;
    margin-bottom: 1rem;
    text-align: start;
    color: #27374D;
`

export const Section = styled.section<{ $flexDirection?: string; }>`
    /* background-color: aquamarine; */
    
    display: flex;
    flex-direction: ${props => props.$flexDirection ?? "row"};
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
`

export const Imgcontainer = styled.div`
    /* background-color: chocolate; */

    width: 50%;
    display: flex;
    justify-content: center;
    
    @media (max-width: 709px) {
        display: none;
    }
`;

export const StyledImg = styled.img<{ $maxWidth?: string; }>`
    max-width: ${props => props.$maxWidth ?? "300px"};;
    height: auto;
`;

export const TextContainer = styled.div`
    /* background-color: mediumorchid; */

    width: 45%;
    text-align: justify;
    line-height: 2.1rem;

    @media (max-width: 709px) {
        width: 90%;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 2rem;
    color: #27374D;
    padding-bottom: 2rem;
    text-align: start;
`


// Estilos formulário, posteriormente será separado em um componente
export const FormContainer = styled.div`
    /* background-color: linen; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media (max-width: 709px) {
        width: 90%;
    }
`;

export const StyledForm = styled.form`
    max-width: 500px;
    margin: auto;
    background: linear-gradient(90deg, #07c97262, #359c9e41);
    padding: 2rem;
    border-radius: 0.5rem;
`;

export const FormTitle = styled.h2`
    color: #27374D;
    font-size: 2.2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`;

export const FormSubtitle = styled.p`
    margin: 1.5rem 0 2rem 0;
    color: black;
`;

export const StyledLabel = styled.label`
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
`;

export const StyledInput = styled.input`
    color: #333;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 0.7rem 1.4rem 0.9rem;
    font-family: 'Roboto', sans-serif;
`;

export const StyledTextArea = styled.textarea`
    color: #333;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 0.7rem 1.4rem 0.9rem;
    font-family: 'Roboto', sans-serif;
`;

export const StyledButton = styled.button`
    background-color: #26BC62;
    padding: 0.9rem 1.3rem;
    color: white;
    font-size: 1.7rem;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    width: 100%;
    font-family: 'Roboto', sans-serif;

    &:hover {
        background-color: #26BC72;
    }
`;
