function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
    window.alert('Por favor digite o número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
            c++;
        }

    }



}