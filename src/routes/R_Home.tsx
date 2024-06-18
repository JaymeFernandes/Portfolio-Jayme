import { useParams, useNavigate } from 'react-router-dom';

// Components
import NavBar from '../components/NavBar'
import Presentation from '../components/Home/Presentation';

// Hooks
import { HookHome } from '../hooks/Home';
import { useEffect } from 'react';

function R_Home() {
    const { lenguage } = useParams();
    const navigate = useNavigate();

    const { LoadingLanguage, LenguageExist } = HookHome();
    const loadingLanguage = LoadingLanguage(lenguage?? "");

    useEffect(() => {
        if(LenguageExist(lenguage ?? "")){
            navigate("/en");
        }
    }, [])
    

    return (
        <>
            <NavBar NavBar={loadingLanguage.NavBar} />
            <Presentation Home={loadingLanguage.Home} />
            <h2></h2>
        </>
    )
}

export default R_Home;
