

import Pt_Br from '../languages/pt-br.json';
import Es from '../languages/es.json';
import En from '../languages/en.json';


export function HookHome()
{
    const opitonsLenguages = [
        
        {
            name: "en",
            location: En
        },
        {
            name: "es",
            location: Es
        },
        {
            name: "pt-br",
            location: Pt_Br
        } 
    ]
    const LoadingLanguage = (lenguage:string) => {
        var lenguageOption  = opitonsLenguages.find(x => x.name === lenguage);

        if(!lenguageOption) lenguageOption  = opitonsLenguages.find(x => x.name === "en");


        return {
            NavBar: {
                NavHome: lenguageOption?.location.NavBar.NavHome ?? En.NavBar.NavHome,
                NavProjects: lenguageOption?.location.NavBar.NavProjects ?? ''
            },
            Home: {
                Description: {
                    Title: lenguageOption?.location.Home.Description.Title ?? '',
                    Options: lenguageOption?.location.Home.Description.Options ?? [],
                    Text: lenguageOption?.location.Home.Description.Text ?? ''
                }
            }
        };
        
    }
    
    return{
        LoadingLanguage
    };
}