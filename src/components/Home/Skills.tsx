import { useEffect, useState } from "react";
import "./../../styles/Home/Skills.scss";

import NetIcon from '../../assets/img/Icons/Net.svg';
import CsharpIcon from '../../assets/img/Icons/CSharp.svg';
import NetCoreIcon from '../../assets/img/Icons/NetCore.svg';
import BlazorIcon from '../../assets/img/Icons/Blazor.svg';
import ReactIcon from '../../assets/img/Icons/React.svg';
import SQL_ServerIcon from '../../assets/img/Icons/SQL_Server.svg';
import MySQLIcon from '../../assets/img/Icons/MySQL.svg';
import HtmlIcon from '../../assets/img/Icons/Html.svg';
import CssIcon from '../../assets/img/Icons/Css.svg';
import SassIcon from '../../assets/img/Icons/Sass.svg';
import GitIcon from '../../assets/img/Icons/Git.svg';
import GitHubIcon from '../../assets/img/Icons/GitHub.svg';

function Skills() {
    const [skillOffset, setSkillOffset] = useState(1700);
    const [animation, setAnimation] = useState(false);

    const list_skill = [
        { icon: <img src={NetIcon} alt=".NET Icon" /> },
        { icon: <img src={NetCoreIcon} alt=".NET Core Icon" /> },
        { icon: <img src={CsharpIcon} alt="C# Icon" /> },
        { icon: <img src={BlazorIcon} alt="Blazor Icon" /> },
        { icon: <img src={ReactIcon} alt="React Icon" /> },
        { icon: <img src={SQL_ServerIcon} alt="SQL Server Icon" /> },
        { icon: <img src={MySQLIcon} alt="MySQL Icon" /> },
        { icon: <img src={HtmlIcon} alt="HTML Icon" /> },
        { icon: <img src={CssIcon} alt="CSS Icon" /> },
        { icon: <img src={SassIcon} alt="Sass Icon" /> },
        { icon: <img src={GitIcon} alt="Git Icon" /> },
        { icon: <img src={GitHubIcon} alt="GitHub Icon" />}
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSkillOffset((prevOffset) => {
                const newOffset = prevOffset - 100;
                if (newOffset == 400) {
                    setAnimation(false);
                    return 1700;
                } else {
                    setAnimation(true);
                    return newOffset;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // Array de dependências vazio para executar apenas uma vez após o primeiro render

    return (
        <div className="container-3d3XF">
            <div className="header-skill">
                {list_skill.concat(list_skill).map((skill, index) => (
                    <div className="option" key={index} style={{transform: `translateX(${skillOffset}px)`, transition: animation ? 'transform 1s' : 'none'}}>
                        {skill.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
