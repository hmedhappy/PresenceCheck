import React, { useState } from 'react'
import { persons  } from './data/Persons.json'
import { endPresence, startPresence , nextOne } from './Logic'
import Person from './Person';
import Appel from './Appel';
import FilterButtons from './FilterButtons';
import './css/Members.css';

export default function Presence() {  
  const [index, setindex] = useState(0) ;
  const [complet, setNomComplet] = useState() ;
  const [bilan, setbilan] = useState([]);
  const [filtred ,setFiltredList]= useState([]) ;
  const [start, setstart] = useState(false) ;
  const style = {display: 'flex',flexDirection: 'column',alignItems: 'center'};

  const next = (status)=>{
      index===persons.length
      ? endPresence(complet,status,persons,index,setFiltredList,setNomComplet,setbilan) 
      : status==="go" 
          ? startPresence(index,persons,setindex,setNomComplet)
          : nextOne(complet,status,index,persons,setFiltredList,setindex,setNomComplet,setbilan);   
   }   
    return (
        <div className="container">
          <Appel start={start} next={next} setstart={setstart} complet={complet} remaining={persons.length-index} />
            <div style={style}>
              <FilterButtons bilan={bilan} setFiltredList={setFiltredList}/>
            </div>
            <ul id="list">
                {filtred && filtred.map((element,index)=>
                  <Person key={index} element={element}/>
                ) }
            </ul>
     </div>
    )
}
