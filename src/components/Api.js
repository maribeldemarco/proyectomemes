import React, { useState, useEffect, useTransition } from 'react';



const Api =() =>
{

const [users,setUsers]=useState([]);


useEffect(()=> {
fetch("https://reqres.in/api/users")
    .then(data =>data.json())
    .then (json =>  setUsers(json.data))
// a esta pag le vamos a pedir info.
},[] );
//si los corchetes estan vacios, se ejecuta 1 sola vez
//use efect> lleva dos parametros, separados 
//por coma, uno lo q se ejecuta, dos despues
//de q cosa se ejecuta. 
//fetch es una func de js.

    return (

    <div>

        <h2>Ejemplo de useEffect</h2>
<ul>

    {users.map(user => (<li>{user.first_name} {user.last_name}</li>))}
</ul>

    </div>
)


}

export default Api;