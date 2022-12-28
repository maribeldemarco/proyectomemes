import React, {useState, useEffect, useContext} from 'react';

export const aParrafo = React.createContext();

export function useParrafo (){
    const contextParrafo = useContext(aParrafo);
    return contextParrafo;
}

const Textodelmeme =({children}) =>
{
    const [textomemes, setTextoMemes]= useState("");

    const texto =(e) => {
 setTextoMemes(e.target.value);

    }
   
    // useEffect(() => {
    //  let myParrafo = textomemes;
    //   });

return (

    <aParrafo.Provider value={textomemes}>
    <div>
        <div className="textomeme">
            <h1 className="titulomeme"> Hace tu meme!</h1>
            <h4 className="inputmeme"> Ingresa el texto del meme</h4>
            <input onChange={texto} className="" type="text" name="textodelmeme" placeholder="Escribi tu frase"></input>
        </div>
        <div>
            {children}
        </div>
    </div>
    </aParrafo.Provider>
)


}

export default Textodelmeme; // se exporta el componente