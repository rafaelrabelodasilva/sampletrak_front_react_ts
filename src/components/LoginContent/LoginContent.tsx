import {
    Wrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
    Label,
    Input,
    Button,
    InputWrapper,
    CardFooter
} from './styles'

export default function LoginContent() {
    return (
        <Wrapper>
            <Card>
                <CardContent>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardSubtitle>Digite suas credenciais para acessar o ambiente</CardSubtitle>
                    </CardHeader>
                    <CardBody>
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
                        <Button type="submit">Entrar</Button>
                    </CardBody>
                    <CardFooter>
                        <p>Não possui uma conta?<a href='/registrar'> Clique aqui!</a></p>
                    </CardFooter>
                </CardContent>
            </Card>
        </Wrapper>
    )
}
