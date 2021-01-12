import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { filtreServices as filtrer } from './Logic'


export default function FilterButtons({bilan,setFiltredList}) {
    return (
    <ButtonGroup id="choices"  size="large" color="secondary" aria-label="outlined primary button group">
        <Button onClick={()=>setFiltredList(filtrer(bilan,"Tous"))}>Tous</Button>
        <Button onClick={()=>setFiltredList(filtrer(bilan,"Abscent"))}>Abscent</Button>
        <Button onClick={()=>setFiltredList(filtrer(bilan,"Present"))} >Present</Button>
    </ButtonGroup>
    )
}
