import HomeContent from "../../components/HomeContent/HomeContent";
import NewNavbar from "../../components/NewNavbar/NewNavbar";
import { Wrapper } from './styles'

export default function HomePage() {
    return (
        <Wrapper>
            <NewNavbar />
            <HomeContent />
        </Wrapper>
    )
}
