import { useState } from 'react'
import Pic1 from '../../assets/img_1.jpg'
import Pic2 from '../../assets/img_2.jpg'
import Pic3 from '../../assets/img_3.jpg'
import Pic4 from '../../assets/img_4.jpg'
import {
    Wrapper,
    CompanyLogoSession,
    Section,
    Imgcontainer,
    Image,
    TextContainer,
    CompanyName,
    CompanySubtitle,
    Subtitle,
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

export default function HomeContent() {

    const data = { name: '', email: '', message: '' };
    const [inputData, setInputData] = useState(data);

    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputData({ ...inputData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            <CompanyLogoSession>
                <CompanyName>SampleTrak</CompanyName>
                <CompanySubtitle>Simplificando a excelência do controle de amostras</CompanySubtitle>
            </CompanyLogoSession>
            <Wrapper>
                <Section>
                    <Imgcontainer>
                        <Image src={Pic1} alt="Imagem o que fazemos" id='img-1' />
                    </Imgcontainer>

                    <TextContainer>
                        <Subtitle>O que fazemos</Subtitle>
                        <p>
                            Nossa aplicação foi projetada para pessoas apaixonadas por
                            qualidade e comprometidas em aperfeiçoar cada etapa do processo de amostras.
                            Imagine poder rastrear cada detalhe, desde o momento em que a amostra é
                            concebida até o momento em que ela é entregue ao cliente satisfeito.
                        </p>
                    </TextContainer>
                </Section>

                <Section $flexDirection='row-reverse'>
                    <Imgcontainer>
                        <Image src={Pic2} alt="Imagem porque nos escolher" id='img-2' />
                    </Imgcontainer>

                    <TextContainer>
                        <Subtitle>Por que nos escolher?</Subtitle>
                        <p>
                            Com nossa ferramenta, você estará no controle completo.
                            Saiba quando sua amostra começa a tomar forma, quando estará pronta e se está dentro do prazo.
                            Identifique a importância de cada amostra e tome decisões informadas sobre seu destino.
                            Precisa enviar a amostra para o cliente para aprovação em mãos? Nós simplificamos isso para você.
                        </p>
                    </TextContainer>
                </Section>

                <Section>
                    <Imgcontainer>
                        <Image src={Pic4} alt="Imagem pronto para experimentar" id='img-3' />
                    </Imgcontainer>

                    <TextContainer>
                        <Subtitle>Pronto para experimentar o futuro das amostras?</Subtitle>
                        <p>
                            Deixe-nos cuidar do controle de amostras, para que você possa se concentrar no que faz de melhor.
                            É hora de elevar seus padrões e garantir a excelência em cada amostra.
                            Explore mais e descubra como podemos fazer a diferença para você.
                            Entre em contato hoje mesmo!
                        </p>
                    </TextContainer>
                </Section>

                <Section $flexDirection='row-reverse'>
                    <Imgcontainer>
                        <Image $maxWidth='330px' src={Pic3} alt="Imagem nos contacte" id='img-4' />
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
                                    rows={6}
                                    value={inputData.message}
                                    onChange={handleData}
                                />
                            </InputLabel>

                            <StyledButton type="submit" onClick={handleSubmit}>
                                Enviar
                            </StyledButton>

                        </Form>
                    </FormContainer>
                </Section>
            </Wrapper>
        </>
    )
}
