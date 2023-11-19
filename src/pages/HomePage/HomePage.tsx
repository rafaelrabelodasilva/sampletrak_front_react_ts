import HomeContent from "../../components/HomeContent/HomeContent";
import Navbar from "../../components/Navbar/Navbar";
import { Wrapper } from './styles'

export default function HomePage() {
    return (
        <Wrapper>
            <Navbar />
            <HomeContent />
        </Wrapper>
    )
}
