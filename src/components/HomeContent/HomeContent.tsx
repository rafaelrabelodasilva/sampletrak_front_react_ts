import { useState } from 'react';
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

export default function HomeContent() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode lidar com os dados do formulário
        console.log('Dados do formulário:', formData);
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
                        <Form method="post" onSubmit={handleSubmit}>

                            <FormTitle>Formulário para contato</FormTitle>
                            <FormSubtitle>Preencha os campos abaixo que entraremos em contato.</FormSubtitle>

                            <InputLabel htmlFor="name">
                                <FormInput
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Nome"
                                />
                            </InputLabel>

                            <InputLabel htmlFor="email">
                                <FormInput
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    placeholder="E-mail" />
                            </InputLabel>

                            <InputLabel htmlFor="message">
                                <StyledTextArea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Assunto"
                                    rows={6}
                                />

                            </InputLabel>

                            <StyledButton type="submit">Enviar</StyledButton>

                        </Form>
                    </FormContainer>
                </Section>
            </Wrapper>
        </>
    )
}
