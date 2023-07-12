
function verif(){
   ch=prompt("tapez ch")
   x=ch.substr(-1)
  
    if(x!=="."){
        verif()
    }
    var voy=0
    var mot=0
    for(var i=0;i<ch.length;i++){
        var k=ch[i].toUpperCase()
        
        if(k=="O" || k=="I" || k=="Y" || k=="E" || k=="A" || k=="U"){
        voy++
            
            }
        if(ch[i]===" " || ch[i]===".")
        {
        mot++
        }
            
        
    }
    
    
    
    
    return {voy,mot}
    
    
    
    
}
console.log(verif())