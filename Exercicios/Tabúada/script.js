function tabuada() {
    let num = document.getElementById('txtn')
    let seltab = document.getElementById('seltab')
 
    if(num.value.length == 0){
        window.alert('ok')
    }else{
        let n = Number(num.value)
        seltab.innerHTML = ''
        let res = document.getElementById('res')
        for(let c = 1;c < 10;c++) {
            var opt = document.createElement('option')
            opt.text = `${c} * ${n} = ${c*n}`
            seltab.appendChild(opt)
            opt.value = `tab${c}`
        }
    
        
        
     
    } 

}