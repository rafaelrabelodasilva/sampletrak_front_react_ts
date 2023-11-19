import styled from 'styled-components'
import '../../Styles/fonts.css';

const logoSize = {
    max425: '3rem',
    max768: '4rem',
    max1024: '5rem',
    max1440: '6rem',
    min1441: '7rem'
}

const titleSize = {
    max425: '1.8rem',
    max768: '2.3rem',
    max1024: '2.5rem',
    max1440: '2.7rem',
    min1441: '3rem'
}

const subtitleSize = {
    max425: '1.3rem',
    max768: '1.5rem',
    max1024: '1.6rem',
    max1440: '1.8rem',
    min1441: '2rem'
}

export const Wrapper = styled.div`
    /* background-color: cornflowerblue; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 90%;
    max-width: 1100px;

    @media (max-width: 425px) {
        width: 100%;
        gap: 1rem;
        padding: 1rem 0;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        gap: 2rem;
        padding: 2rem 0;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        gap: 3rem;
        padding: 3rem 0;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        gap: 4rem;
        padding: 4rem 0;
    }

    @media (min-width: 1441px) {
        gap: 6rem;
        padding: 6rem 0;
    }
`;

export const CompanyLogoSession = styled.section`
    /* background-color: teal; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    /* background: linear-gradient(90deg, #07c972, #359d9e); */

    @media (max-width: 425px) {
        padding: 2rem;
        height: 15rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        padding: 2rem;
        height: 18rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        height: 20rem;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        height: 26rem;
    }

    @media (min-width: 1441px) {
        height: 30rem;
    }
`

export const CompanyName = styled.h1`
    font-family: 'Shippori Antique', sans-serif;
    text-align: start;
    color: #27374D;


    @media (max-width: 425px) {
        font-size: ${logoSize.max425};
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${logoSize.max768};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        margin-bottom: 1rem;
        font-size: ${logoSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${logoSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${logoSize.min1441};
    }
`

export const CompanySlogan = styled.p`
    color: #27374D;


    @media (max-width: 425px) {
        font-size: ${subtitleSize.max425};
        text-align: center;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${subtitleSize.max768};
        text-align: center;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${subtitleSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${subtitleSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${subtitleSize.min1441};
    }
`;

export const Section = styled.section<{
    $flexDirection?: string;
}>`
    /* background-color: yellowgreen; */
    
    display: flex;
    flex-direction: ${props => props.$flexDirection ?? "row"};
    align-items: center;
    justify-content: center;
    width: 100%;


    @media (max-width: 425px) {
        padding: 2rem;
        height: 18rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        padding: 2rem;
        height: 20rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        height: 40rem;
        width: 100%;
        padding: 0 3rem;
        max-width: 80%;
        gap: 3rem;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        height: 30rem;
        gap: 3rem;
    }

    @media (min-width: 1441px) {
        height: 40rem;
        gap: 3rem;
    }
`

export const Imgcontainer = styled.div`
    /* background-color: chocolate; */

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 425px) {
        display: none;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        display: none;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 40%;
        height: 100%;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        width: 25%;
        height: 100%;
    }

    @media (min-width: 1441px) {
        width: 30%;
        height: 100%;
    }
`;

export const Image = styled.img`
    max-width: 100%;

    /* @media (max-width: 425px) {

    }

    @media (min-width: 426px) and (max-width: 768px) {

    }

    @media (min-width: 769px) and (max-width: 1024px) {
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
    }

    @media (min-width: 1441px) {
    } */
`;

export const TextContainer = styled.div`
    /* background-color: ivory; */

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 425px) {

    }

    @media (min-width: 426px) and (max-width: 768px) {
        
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 60%;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        max-width: 50%;
    }

    @media (min-width: 1441px) {
        max-width: 50%;
    }
`;

export const TextTitle = styled.h2`
    /* background-color: lime; */
    color: #27374D;
    text-align: start;


    @media (max-width: 425px) {
        font-size: ${titleSize.max425};
        margin-bottom: 1.4rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${titleSize.max768};
        margin-bottom: 1.5rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${titleSize.max1024};
        padding-bottom: 1.7rem;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${titleSize.max1440};
        padding-bottom: 2rem;
    }

    @media (min-width: 1441px) {
        font-size: ${titleSize.min1441};
        padding-bottom: 2rem;
    }
`

export const TextContent = styled.p`
    /* background-color: cadetblue; */
    text-align: justify;


    @media (max-width: 425px) {
        font-size: ${subtitleSize.max425};
        line-height: 1.7rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${subtitleSize.max768};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${subtitleSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${subtitleSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${subtitleSize.min1441};
    }
`;


// Estilos formulário, posteriormente será separado em um componente

export const SectionForm = styled.section<{
    $flexDirection?: string;
}>`
    /* background-color: yellowgreen; */
    
    display: flex;
    flex-direction: ${props => props.$flexDirection ?? "row"};
    align-items: center;
    justify-content: center;
    width: 100%;


    @media (max-width: 425px) {
        height: 35rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        padding: 2rem;
        height: 40rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        height: 40rem;
        width: 100%;
        padding: 0 3rem;
        max-width: 80%;
        gap: 3rem;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        height: 48rem;
        gap: 3rem;
    }

    @media (min-width: 1441px) {
        height: 48rem;
        gap: 3rem;
    }
`

export const FormContainer = styled.div`
    /* background-color: linen; */
    
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 425px) {
        
    }

    @media (min-width: 426px) and (max-width: 768px) {

    }

    @media (min-width: 769px) and (max-width: 1024px) {

    }

    @media (min-width: 1025px) and (max-width: 1440px) {
    }

    @media (min-width: 1441px) {
    }
`;

export const Form = styled.form`
    background-color: #dff3fc;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    @media (max-width: 425px) {
        max-width: 95%;
        padding: 1.2rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        max-width: 95%;
        padding: 1.2rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 42rem;
        padding: 3rem 2rem;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        max-width: 44rem;
        padding: 3rem 2rem;
    }

    @media (min-width: 1441px) {
        max-width: 46rem;
        padding: 2rem;
    }
`;

export const FormTitle = styled.h3`
    color: #27374D;
    /* margin-bottom: 1rem; */
    /* font-size: 2.4rem; */


    @media (max-width: 425px) {
        font-size: ${titleSize.max425};
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${titleSize.max768};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${titleSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${titleSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${titleSize.min1441};
    }
`;

export const FormSubtitle = styled.p`
    margin: 1.5rem 0 2rem 0;


    @media (max-width: 425px) {
        font-size: ${subtitleSize.max425};
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${subtitleSize.max768};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${subtitleSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${subtitleSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${subtitleSize.min1441};
    }
`;

export const InputLabel = styled.label`
    width: 100%;
    display: flex;


    @media (max-width: 425px) {
        margin-bottom: 0.6rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        margin-bottom: 0.8rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        margin-bottom: 1rem;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        margin-bottom: 1.2rem;
    }

    @media (min-width: 1441px) {
        margin-bottom: 1.4rem;
    }
`;

export const FormInput = styled.input`
    color: #333;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-family: 'Roboto', sans-serif;


    @media (max-width: 425px) {
        font-size: ${subtitleSize.max425};
        line-height: 1.7rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${subtitleSize.max768};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${subtitleSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${subtitleSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${subtitleSize.min1441};
    }
`;

export const StyledTextArea = styled.textarea`
    color: #333;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 425px) {
        font-size: ${subtitleSize.max425};
        line-height: 1.7rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${subtitleSize.max768};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${subtitleSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${subtitleSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${subtitleSize.min1441};
    }
`;

export const StyledButton = styled.button`
    background-color: #26BC62;
    padding: 0.9rem 1.3rem;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    width: 100%;
    font-family: 'Roboto', sans-serif;

    &:hover {
        background-color: #26BF92;
    }

    @media (max-width: 425px) {
        font-size: ${subtitleSize.max425};
        line-height: 1.7rem;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: ${subtitleSize.max768};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: ${subtitleSize.max1024};
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: ${subtitleSize.max1440};
    }

    @media (min-width: 1441px) {
        font-size: ${subtitleSize.min1441};
    }
`;
