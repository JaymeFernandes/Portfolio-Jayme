import { useEffect, useState } from 'react';
import Skills from './Skills';

import image from '../../assets/img/header-img.svg'
import '../../styles/Home/Presentations.scss'


function Presentation(){
    const [numLoop, Setloop] = useState(0);
    const [isDeleting, SetisDeleting] = useState(false)
    const [Text, SetText] = useState('');
    const [delta, SetDelta] = useState(100);
    const toRotate = [ "Web Developer." , "Software Developer.", "Back-End.", "ASP.NET Developer." ];

    useEffect(() => {
        

        let tick = setInterval(() => {
            Tick();
        }, delta);

        return () => clearInterval(tick);
    });



    const Tick = () => {
        const i = numLoop % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, Text.length - 1) : fullText.substring(0, Text.length + 1);
    
        SetText(updatedText);
    
        if (!isDeleting && updatedText === fullText) {
            SetisDeleting(true);
            SetDelta(4000);
        } else if (isDeleting && updatedText === '') {
            SetisDeleting(false);
            SetDelta(200);
            Setloop(numLoop + 1);
        }
        else if (isDeleting)
        {
            SetDelta(50);
        }
      };


    return (
        <div className="container-49XSF" id='home'>

            <div className="presentation">
                <div className="about">
                    <div className="description">
                            <h2>i'm Jayme <span>{Text}</span> <p>|</p></h2>

                            <p>
                                I have a great passion for programming, and my focus is always on improving my knowledge in the field <br/>
                            </p>

                        </div>
                        <Skills/>
                    </div>

                <div className="description-image">
                        <img src={image} />
                </div>
                
                
            </div>
            
        </div>
    );
}

export default Presentation;