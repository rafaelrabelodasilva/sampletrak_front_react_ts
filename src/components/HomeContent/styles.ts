import styled from 'styled-components'
import '../../Styles/fonts.css';

export const Wrapper = styled.div`
    /* background-color: cornflowerblue; */

    width: 90%;
    max-width: 1100px;
    margin: auto;
    text-align: center;
`;

export const CompanyLogoSession = styled.section`
    /* background-color: teal; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0;
    height: 100vh;
    background: linear-gradient(90deg, #07c972, #359d9e);
`

export const CompanyName = styled.h1`
    font-family: 'Shippori Antique', sans-serif;
    margin-bottom: 1rem;
    font-size: 7rem;
    text-align: start;
    color: #FEFEFE;
`

export const CompanySubtitle = styled.p`
    color: #FEFEFE;
    font-size: 2.5rem;
`;

export const Section = styled.section<{ $flexDirection?: string; }>`
    /* background-color: aquamarine; */
    
    display: flex;
    flex-direction: ${props => props.$flexDirection ?? "row"};
    align-items: center;
    justify-content: center;
    height: 60rem;
    margin: 3rem 0;
    padding: 0 3rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    border-radius: 1rem;

    @media (max-width: 709px) {
        height: 40rem;
        width: 90%;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
    }
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

export const Image = styled.img<{ $maxWidth?: string; }>`
    max-width: ${props => props.$maxWidth ?? "300px"};;
    height: auto;
`;

export const TextContainer = styled.div`
    /* background-color: mediumorchid; */

    width: 45%;
    text-align: justify;

    @media (max-width: 709px) {
        width: 90%;
    }
`;

export const Subtitle = styled.h2`
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

export const Form = styled.form`
    /* max-width: 400px; */
    margin: auto;
    background-color: #DDE6ED;
    /* background: linear-gradient(90deg, #07c97262, #359c9e41); */
    padding: 3rem 2rem;
    border-radius: 0.5rem;
`;

export const FormTitle = styled.h2`
    color: #27374D;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`;

export const FormSubtitle = styled.p`
    margin: 1.5rem 0 2rem 0;
`;

export const InputLabel = styled.label`
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
`;

export const FormInput = styled.input`
    color: #333;
    width: 100%;
    height: 4.7rem;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-family: 'Roboto', sans-serif;
`;

export const StyledTextArea = styled.textarea`
    color: #333;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-family: 'Roboto', sans-serif;
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
`;
