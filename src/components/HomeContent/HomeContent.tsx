import { useState } from 'react';
import Pic1 from '../../assets/logo_2.jpg'
import Pic2 from '../../assets/logo_4.jpg'
import Pic3 from '../../assets/logo_5.jpg'
import {
    Wrapper,
    SectionLogo,
    SectionWhatWeDo,
    SectionWhyChooseUs,
    SectionContactUs,
    Content,
    ImgContent,
    StyledH1,
    StyledH2,
    ImgContainer,
    Img,
    TexContainer
} from './styles'
import './styles.css'

export default function HomeContent() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode lidar com os dados do formulário
        console.log('Dados do formulário:', formData);
    };


    return (
        <Wrapper>
            <SectionLogo>
                <StyledH1>SampleTrak</StyledH1>
                <p>Simplificando a excelência do controle de amostras</p>
            </SectionLogo>

            <SectionWhatWeDo>
                <ImgContent>
                    <ImgContainer>
                        <Img src={Pic1} alt="Logo 1" id='logo1' />
                    </ImgContainer>
                </ImgContent>
                <Content>
                    <TexContainer>
                        <StyledH2>O que fazemos</StyledH2>
                        <p>
                            Nossa aplicação foi projetada para pessoas apaixonadas por
                            qualidade e comprometidas em aperfeiçoar cada etapa do processo de amostras.
                            Imagine poder rastrear cada detalhe, desde o momento em que a amostra é
                            concebida até o momento em que ela é entregue ao cliente satisfeito.
                        </p>
                    </TexContainer>
                </Content>
            </SectionWhatWeDo>

            <SectionWhyChooseUs>
                <ImgContent>
                    <ImgContainer>
                        <Img src={Pic2} alt="Logo 1" id='logo1' />
                    </ImgContainer>
                </ImgContent>
                <Content>
                    <TexContainer>
                        <StyledH2>Por que nos escolher?</StyledH2>
                        <p>
                            Com nossa ferramenta, você estará no controle completo.
                            Saiba quando sua amostra começa a tomar forma, quando estará pronta e se está dentro do prazo.
                            Identifique a importância de cada amostra e tome decisões informadas sobre seu destino.
                            Precisa enviar a amostra para o cliente para aprovação em mãos? Nós simplificamos isso para você.
                        </p>
                    </TexContainer>
                </Content>
            </SectionWhyChooseUs>

            <SectionContactUs>
                <ImgContent>
                    <ImgContainer>
                        <Img src={Pic3} alt="Logo 1" id='logo1' />
                    </ImgContainer>
                </ImgContent>
                <Content>
                    <TexContainer>
                        <StyledH2>Pronto para experimentar o futuro das amostras?</StyledH2>
                        <p>
                            Deixe-nos cuidar do controle de amostras, para que você possa se concentrar no que faz de melhor.
                            É hora de elevar seus padrões e garantir a excelência em cada amostra.
                            Explore mais e descubra como podemos fazer a diferença para você.
                            Entre em contato hoje mesmo!
                        </p>

                    </TexContainer>

                </Content>
            </SectionContactUs>
            <div className='section-contact-us'>
                <form className="formulario" method="post" onSubmit={handleSubmit}>

                    <h2 className="titulo">Formulário para contato</h2>
                    <p className='subtitle'>Preencha os campos abaixo que entraremos em contato.</p>
                    <label className="label" htmlFor="name">

                        <input
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            id="name"
                            name="name"
                            className="input-bordas"
                            placeholder="Nome"
                        />
                        <span className="focus-border"> <i></i> </span>

                    </label>

                    <label className="label" htmlFor="email">

                        <input
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            className="input-bordas"
                            placeholder="E-mail" />
                        <span className="focus-border"> <i></i> </span>

                    </label>

                    <label className="label" htmlFor="message">

                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            type="text"
                            className="input-bordas textarea"
                            rows="4"
                            placeholder="Assunto"
                        />
                        <span className="focus-border"> <i></i> </span>

                    </label>

                    <button className="button-form borda-inversa" type="submit">Enviar</button>

                </form>
            </div>
        </Wrapper>
    )
}
