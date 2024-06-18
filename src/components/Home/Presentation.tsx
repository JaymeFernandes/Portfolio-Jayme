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
    Home: {
        Description: {
            Title: string;
            Options: string[];
            Text: string;
        };
    };
}

const Presentation : React.FC<PropsLanguage> = ( { Home }) => {

    const { Text } = PresentationHook(Home.Description.Options);

    return (
        <div className="container-49XSF" id='home'>

            <div className="presentation">
                <div className="about">
                    <div className="description">
                            <h2>{Home.Description.Title} <span>{Text}</span> <p>|</p></h2>

                            <p>
                                {Home.Description.Text} <br/>
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