import { useState, useEffect } from "react";

export function PresentationHook(rotate:string[]){
    const [numLoop, Setloop] = useState(0);
    const [isDeleting, SetisDeleting] = useState(false)
    const [Text, SetText] = useState('');
    const [delta, SetDelta] = useState(100);
    const toRotate = rotate;

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

      return{
        Text
      }
}