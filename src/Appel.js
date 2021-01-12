import React from 'react'
import Button from '@material-ui/core/Button';

export default function Appel({start,next,setstart,complet,remaining}) {
    return (
        <>
    <div id="presence" style={{margin: '20px'}}>
         <div id="names" >
            {start
            ? <h6>{remaining} remaining </h6>
            :<Button onClick={()=>{setstart(!start);next("go");}} color="secondary">
                Commencer
            </Button>} 
             <h4 id="showname"> {complet}  </h4>
         </div>
         <div id="buttons"  >
             <button type="button" disabled={!start} onClick={()=>next("Present")} className="btn btn-success">Present</button>
             <button type="button" disabled={!start} onClick={()=>next("Excusé")}  className="btn btn-warning">Excusé</button>
             <button type="button" disabled={!start} onClick={()=>next("Abscent")} className="btn btn-danger">Abscent</button>
         </div>
     </div> 
        </>
    )
}
