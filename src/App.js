import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Formulario';
import axios from 'axios';

function App() {
  const [busquedaletra, guardarBusquedaletra] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios(url);

      console.log(resultado)
    }
    consultarApiLetra();

  },[busquedaletra])

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaletra={guardarBusquedaletra}
      />
    </Fragment>


  );
}

export default App;
