
import React, {useState} from 'react';
import html2canvas from 'html2canvas';


const Memeimg =() =>
{    const [imgmemes,setImgmemes]= useState(1);
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

<div className="">
<h4 className="tituloelegir"> Elegi un meme</h4>
<select onChange={seleccionarlaimg}  className="opciones" name="img"> 

    <option value={1}>
meme 1
    </option>
    <option value={2}>
Meme 2
    </option>
    <option value={3}>
Meme 3
    </option>
</select>

<figure className="" id="exportarimg">
    <p></p>
<img src={require (`../imgs/${imgmemes}.jpg`)}/>



</figure>

<button onClick= {exportar}type="button"> Descargar el meme </button>
</div>
)


}

export default Memeimg; // se exporta el componente