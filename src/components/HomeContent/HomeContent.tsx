import { useState } from 'react'
import Pic4 from '../../assets/img_4.jpg'
import {
    Wrapper,
    CompanyLogoSession,
    Section,
    Imgcontainer,
    Image,
    TextContainer,
    CompanyName,
    CompanySlogan,
    TextTitle,
    TextContent,
    SectionForm,
    FormTitle,
    FormSubtitle,
    Form,
    InputLabel,
    FormInput,
    StyledTextArea,
    StyledButton,
    FormContainer
} from './styles'
import axios from 'axios'
import HomeText from '../../content/HomeContent.json'

export default function HomeContent() {

    const data = { name: '', email: '', message: '' };
    const [inputData, setInputData] = useState(data);

    const handleData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputData({ ...inputData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Ajuste para enviar apenas as propriedades necessárias
        const { name, email, message } = inputData;

        // Certifique-se de que o campo "email" está no formato correto
        if (!validateEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        axios
            .post('http://localhost:3000/comunicacoes', { nome: name, email: email, assunto: message, ativo: 1 })
            .then((response) => {
                console.log(response);
                alert('Funcionou!');
            })
            .catch((error) => {
                console.error('Erro na requisição:', error);
                alert('Erro ao enviar o formulário. Por favor, tente novamente.');
            });
    };

    // Função para validar o formato do e-mail
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (

        <Wrapper>
            <CompanyLogoSession>
                <CompanyName>{HomeText.companyName}</CompanyName>
                <CompanySlogan>{HomeText.Companyslogan}</CompanySlogan>
            </CompanyLogoSession>

            <Section>
                <Imgcontainer>
                    <Image src={HomeText.sectionWhatWeDo.image} alt="Imagem o que fazemos" id='img-1' />
                </Imgcontainer>

                <TextContainer>
                    <TextTitle>{HomeText.sectionWhatWeDo.title}</TextTitle>
                    <TextContent>{HomeText.sectionWhatWeDo.content}</TextContent>
                </TextContainer>
            </Section>

            <Section $flexDirection='row-reverse' >
                <Imgcontainer>
                    <Image src={HomeText.sectionWhyChooseUs.image} alt="Imagem porque nos escolher" id='img-2' />
                </Imgcontainer>

                <TextContainer>
                    <TextTitle>{HomeText.sectionWhyChooseUs.title}</TextTitle>
                    <TextContent>{HomeText.sectionWhyChooseUs.content}</TextContent>
                </TextContainer>
            </Section>

            <Section>
                <Imgcontainer>
                    <Image src={HomeText.sectionReadyToStart.image} alt="Imagem pronto para experimentar" id='img-3' />
                </Imgcontainer>

                <TextContainer>
                    <TextTitle>{HomeText.sectionReadyToStart.title}</TextTitle>
                    <TextContent>{HomeText.sectionReadyToStart.content}</TextContent>
                </TextContainer>
            </Section>

            <SectionForm $flexDirection='row-reverse'>
                <Imgcontainer>
                    <Image src={Pic4} alt="Imagem nos contacte" id='img-4' />
                </Imgcontainer>

                <FormContainer>
                    <Form method="post">

                        <FormTitle>Formulário para contato</FormTitle>
                        <FormSubtitle>Preencha os campos abaixo que entraremos em contato.</FormSubtitle>

                        <InputLabel htmlFor="name">
                            <FormInput
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome"
                                value={inputData.name}
                                onChange={handleData}
                            />
                        </InputLabel>

                        <InputLabel htmlFor="email">
                            <FormInput
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={inputData.email}
                                onChange={handleData}
                            />
                        </InputLabel>

                        <InputLabel htmlFor="message">
                            <StyledTextArea
                                id="message"
                                name="message"
                                placeholder="Assunto"
                                rows={4}
                                value={inputData.message}
                                onChange={handleData}
                            />
                        </InputLabel>

                        <StyledButton type="submit" onClick={handleSubmit}>
                            Enviar
                        </StyledButton>

                    </Form>
                </FormContainer>
            </SectionForm>
        </Wrapper>
    )
}
