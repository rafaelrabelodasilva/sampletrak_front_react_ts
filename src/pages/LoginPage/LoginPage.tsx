import LoginContent from "../../components/LoginContent/LoginContent";
import Navbar from "../../components/Navbar/Navbar";
import { Wrapper } from './styles'

export default function LoginPage() {
    return (
        <Wrapper>
            <Navbar />
            <LoginContent />
        </Wrapper>
    )
}
