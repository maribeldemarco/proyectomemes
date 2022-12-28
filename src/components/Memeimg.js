
import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import { useParrafo } from './Textodelmeme';


const Memeimg =() =>
{   const textomemes = useParrafo();
    // document.getElementById("acaVaTexto").innerHTML={textomemes};
    
    const [imgmemes,setImgmemes]= useState(1);
    // las funciones las llamo arriba del return

    const seleccionarlaimg =(e)=>
    {
        setImgmemes(e.target.value);


    }

const exportar =(e)=>

{
    html2canvas(document.querySelector("#exportarimg")).then(function(canvas) {
    {/*document.body.appendChild(canvas);*/}
    let img= canvas.toDataURL("memes/jpg")
    let link= document.createElement ("a");
    link.download= "mimeme.jpg";
    link.href=img;
    link.click();
    });

}



    return (
        
<div className="eleccionmeme">
<h4 className="tituloelegir"> Elegi un meme</h4>
<select onChange={seleccionarlaimg}  className="opciones" name="img"> 

    <option value={1}>
Gato    </option>
    <option value={2}>
Perro
    </option>
    <option value={3}>
Loro
    </option>
</select>



<figure className="" id="exportarimg">
    <p id="acaVaTexto">{textomemes}</p>
    <section >
    <img  className="foto" src={require (`../imgs/${imgmemes}.jpg`)} />
    </section>


</figure>

<button onClick= {exportar}type="button"> Descargar el meme </button>
</div>
)


}

export default Memeimg; // se exporta el componente