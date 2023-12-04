import {
    Wrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
    Label,
    Label2,
    Input,
    Input2,
    Button,
    InputWrapper,
    Input2Wrapper,
    InputWrapper2,
    CardFooter
} from './styles'

export default function RegistrarContent() {




    return (
        <Wrapper>
            <Card>
                <CardContent>
                    <CardHeader>
                        <CardTitle>Registro</CardTitle>
                        <CardSubtitle>Preencha o formulário para ter acesso ao ambiente</CardSubtitle>
                    </CardHeader>
                    <CardBody>
                        <Input2Wrapper>
                        <InputWrapper2>
                            <Label2 htmlFor="firstName">Primeiro nome</Label2>
                            <Input2 type="text" id='firstName' />
                        </InputWrapper2>
                        <InputWrapper2>
                            <Label2 htmlFor="sobreNome">Sobrenome</Label2>
                            <Input2 type="text" id='sobreNome' />
                        </InputWrapper2>
                        </Input2Wrapper>
                        <InputWrapper>
                            <Label htmlFor="birthDate">Data de nascimento</Label>
                            <Input type="date" id='birthDate' />
                        </InputWrapper>
                        <InputWrapper>
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="text" id='email' />
                        </InputWrapper>
                        <InputWrapper>
                            <Label htmlFor="password">Senha</Label>
                            <Input type="password"
                                autoComplete='off'
                                id='password' />
                        </InputWrapper>
                        <Button type="submit">Registrar</Button>
                    </CardBody>
                    <CardFooter>
                        <p>Já está registrado?<a href='/login'> Clique aqui!</a></p>
                    </CardFooter>
                </CardContent>
            </Card>
        </Wrapper>
    )
}
