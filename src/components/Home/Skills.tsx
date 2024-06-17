
// Css
import "./../../styles/Home/Skills.scss";

// Hooks
import { SkillsHook } from "../../hooks/Skills";

function Skills() {
    
    const {skillOffset, animation, list_skill} = SkillsHook();

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
