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
    const [skillOffset, setSkillOffset] = useState(610);
    const [animation, setAnimation] = useState(false);

    const list_skill = [
        {id: 1, icon: <img src={NetIcon} alt=".NET Icon" />, name: 'DotNet' },
        {id: 2, icon: <img src={NetCoreIcon} alt=".NET Core Icon" />, name: '.Net Core' },
        {id: 3, icon: <img src={CsharpIcon} alt="C# Icon" />, name: 'C#' },
        {id: 4, icon: <img src={BlazorIcon} alt="Blazor Icon" />, name: 'Blazor' },
        {id: 5, icon: <img src={ReactIcon} alt="React Icon" />, name: 'React' },
        {id: 6, icon: <img src={SQL_ServerIcon} alt="SQL Server Icon" />, name: 'SQL Server' },
        {id: 7, icon: <img src={MySQLIcon} alt="MySQL Icon" />, name: 'MySQL' },
        {id: 8, icon: <img src={HtmlIcon} alt="HTML Icon" />, name: 'HTML' },
        {id: 9, icon: <img src={CssIcon} alt="CSS Icon" />, name: 'CSS' },
        {id: 10, icon: <img src={SassIcon} alt="Sass Icon" />, name: 'Sass' },
        {id: 11, icon: <img src={GitIcon} alt="Git Icon" />, name: 'Git' },
        {id: 12, icon: <img src={GitHubIcon} alt="GitHub Icon" />, name: 'GitHub'}
    ];
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSkillOffset((prevOffset) => {
                const newOffset = prevOffset - 110;
                if (newOffset <= 610) {
                    setAnimation(false);
                    return 1950;
                } else {
                    setAnimation(true);
                    return newOffset;
                }
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []); // Array de dependências vazio para executar apenas uma vez após o primeiro render

    return (
        <div className="container-3d3XF">
            <div className="header-skill">
                {list_skill.concat(list_skill).map((skill, index) => (
                    <div className="skills-item" key={`${skill.id}-${index}`}>
                        <div className="icon" style={{transform: `translateX(${skillOffset}px)`, transition: animation ? 'transform 1s' : 'none'}}>
                            {skill.icon}
                        </div>

                        <p style={{transform: `translateX(${skillOffset}px)`, transition: animation ? 'transform 1s' : 'none'}}>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
