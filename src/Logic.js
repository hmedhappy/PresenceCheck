export const filtreServices = (bilan,status) => {
    if (status=="Tous") {
        return bilan
    }else return bilan.filter(element=>element.status==status);
   }

export const endPresence = (complet,status,fromServer,index,setFiltredList,setNomComplet,setbilan)=>{
    setFiltredList((old)=>[{name:complet,status},...old])
    setNomComplet(fromServer[index-1].prenom+" "+fromServer[index-1].nom);
    setbilan((old)=>[{name:complet,status},...old])
    document.getElementById('presence').innerHTML=""
   };
export const startPresence = (index,fromServer,setindex,setNomComplet)=>{
    setindex(index+1);
    setNomComplet(fromServer[index].prenom+" "+fromServer[index].nom);   
}
export const nextOne = (complet,status,index,fromServer,setFiltredList,setindex,setNomComplet,setbilan) =>{
    setFiltredList((old)=>[{name:complet,status},...old]);
              setindex(index+1);
              setNomComplet(fromServer[index].prenom+" "+fromServer[index].nom);
              setbilan((old)=>[{name:complet,status},...old]);
}


