import { useState } from "react";

export function NavBarHook(){
    const [isLogoHovered, LogoSetColor] = useState(false);

    const LogoMouseEnter = () => {
        LogoSetColor(true);
    }

    const LogoMouseLeave = () => {
        LogoSetColor(false);
    }

    

    return{
        isLogoHovered,
        LogoMouseEnter,
        LogoMouseLeave
    };
}