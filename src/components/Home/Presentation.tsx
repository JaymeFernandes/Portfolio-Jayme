// Imports
import image from '../../assets/img/header-img.svg'

// Components
import Skills from './Skills';

// Css
import '../../styles/Home/Presentations.scss'

// Hook
import { PresentationHook } from '../../hooks/Presentation';
import React from 'react';

interface PropsLanguage {
    setlanguage: {
        NavBar: {
            NavHome: string;
            NavProjects: string;
        };
        Home: {
            Description: {
                Title: string;
                Options: string[];
                Text: string;
            };
        };
    };
}

const Presentation : React.FC<PropsLanguage> = ( { setlanguage }) => {

    const { Text } = PresentationHook(setlanguage.Home.Description.Options);

    return (
        <div className="container-49XSF" id='home'>

            <div className="presentation">
                <div className="about">
                    <div className="description">
                            <h2>{setlanguage.Home.Description.Title} <span>{Text}</span> <p>|</p></h2>

                            <p>
                                {setlanguage.Home.Description.Text} <br/>
                            </p>

                        </div>
                        <Skills/>
                    </div>

                <div className="description-image">
                        <img src={image} />
                </div>
            </div>

            <div className="Chevro-Down">
                <i className='bx bxs-chevron-down' ></i>
            </div>


            
        </div>
    );
}

export default Presentation;