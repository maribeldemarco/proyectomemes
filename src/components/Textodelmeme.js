import React, {useState} from 'react';

const Textodelmeme =() =>
{
    const [textomemes,setTextoMemes]= useState();

    const texto =(e) => {
 setTextoMemes(e.target.value);
           console.log (e.target.value);


    }
return (

<div className="textomeme">
<h1 className="titulomeme"> Hace tu meme</h1>
<h4 className="inputmeme"> Ingresa el texto del meme</h4>

<input onChange={texto} className="" type="text" name="textodelmeme" placeholder="Escribi tu frase"></input>
</div>
)


}

export default Textodelmeme; // se exporta el componente