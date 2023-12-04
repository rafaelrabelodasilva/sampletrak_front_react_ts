import styled from "styled-components";

export const Wrapper = styled.div`
    /* background-color: peru; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;
    max-width: 1100px;
    height: 90%;
`;

export const Card = styled.div`
    /* background-color: lightblue; */

    width: 50rem;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 
                0px 105px 63px rgba(0, 0, 0, 0.05), 
                0px 47px 47px rgba(0, 0, 0, 0.09), 
                0px 12px 26px rgba(0, 0, 0, 0.1), 
                0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #27374D;
    color: #F3F6F9;
`;

export const CardContent = styled.div`
    /* background-color: lawngreen; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
`;

export const CardTitle = styled.h1`
    margin-bottom: 3rem;
`;

export const CardSubtitle = styled.p`
    
`;

export const CardBody = styled.form`
    /* background-color: lightcoral; */
    width: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
    margin-bottom: 2rem;
`;

export const Label = styled.label`
    width: 85%;
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
`;

export const Input = styled.input`
    padding: 0.9rem;
    outline: none;
    background-color: transparent;
    border-radius: 5px;
    width: 85%;
    border: 1px solid #d38c00;
    color: #F3F6F9;
    font-size: 1.7rem;

    &:focus {
        box-shadow: 0 0 3px #f8a500;
    }
`;

export const Button = styled.button`
    padding: 0.9rem;
    border-radius: 5px;
    width: 85%;
    background-color: #d38c00;
    font-size: 1.7rem;
    color: #F3F6F9;
    border: none;

    &:hover {
        background-color: #f8a500;
        cursor: pointer;
    }
`;

export const CardFooter = styled.div`
    /* background-color: hotpink; */

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 85%;

    p {
    font-size: 1.5rem;
    }

    a {
        cursor: pointer;
        color: inherit; /* Herda a cor do pai (normalmente o texto padrão da página) */
        text-decoration: none;
        &:hover {
            color: #d38c00;
        }
    }
`;


