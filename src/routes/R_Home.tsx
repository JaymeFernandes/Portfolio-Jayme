import { useParams } from 'react-router-dom';

// Components
import NavBar from '../components/NavBar'
import Presentation from '../components/Home/Presentation';

// Hooks
import { HookHome } from '../hooks/Home';

function R_Home() {
    const { lenguage } = useParams();

    const { LoadingLanguage } = HookHome();
    const loadingLanguage = LoadingLanguage(lenguage ? lenguage : "en");

    return (
        <>
            <NavBar setlanguage={loadingLanguage} />
            <Presentation setlanguage={loadingLanguage} />
            <h2></h2>
        </>
    )
}

export default R_Home;
