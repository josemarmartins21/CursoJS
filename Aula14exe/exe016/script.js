function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

  
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.length == 0){
        window.alert('Faltam Dados')
        res.innerHTML = `Impossivel contar`
    }else{
        res.innerHTML = 'Contando<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Considere o passo maior que 0')
            p = 1
        }else if(i < f){
        //Crescente
            for(let c = i; c < f; c+=p ){
                res.innerHTML += ` ${c} \u{1F449}`
               }
        }else if(f < i){
            //Regressiva
            for(let c = i;c > f;c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
       res.innerHTML += `\u{1F3C1}`
    }
}