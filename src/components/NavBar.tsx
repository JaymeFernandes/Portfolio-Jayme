import { useState } from 'react';
import '../styles/NavBar.scss'

function Navegation(){
    const [isLogoHovered, LogoSetColor] = useState(false);

    const LogoMouseEnter = () => {
        LogoSetColor(true);
    }

    const LogoMouseLeave = () => {
        LogoSetColor(false);
    }

    return(
        <div className="header-content">

            <div className={isLogoHovered ? "header-logo--hover" : "header-logo"} onMouseEnter={LogoMouseEnter} onMouseLeave={LogoMouseLeave}>
                <a href="#home">
                    <i className='bx bx-code-alt' ></i>
                    <p>JAYME FERNADES</p>
                </a>
            </div>
            
            <div className="header-menu">
                <ul className="menu">
                    <li className="menu-item"><a href="#home">Home</a></li>
                    <li className="menu-item"><a href="#projects">Projects</a></li>
                </ul>
            </div>

            <div className="header-oprions">
                


                <div className="header-action">
                    <ul className="user-actions">
                        <li className="actions-item">
                            <a href="https://www.linkedin.com/in/jayme-fernandes/" target='_blank'>
                                <i className='bx bxl-linkedin-square' ></i>
                            </a>
                        </li>

                        <li className="actions-item">
                            <a href="https://github.com/JaymeFernandes" target='_blank'>
                                <i className='bx bxl-github' ></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            

        </div>
    );
}

export default Navegation;