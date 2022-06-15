import React from "react";
import GIF from "./Gif";
import getGifs from "../services/getGifs";
import { useEffect, useState } from "react";

export default function ListOfGifs({params}){
  const { keyboard } = params;
  const [ loading, setLoading ] = useState(false);
  // Creando estado para setear el gif
    const [ gifs, setGifs] = useState([]);
    // Efecto para obtener los gif con filtro keyboard
    useEffect(function(){
      setLoading(true)
      getGifs({ keyboard }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
    },[keyboard])

if(loading) return <i>Cargando</i>

    return <div>
      {
          gifs.map(({id, title, url}) => 
          <GIF 
          key={id}
          title={title} 
          url={url} 
          id={id}></GIF> 
          )
      }
    </div>

        
}