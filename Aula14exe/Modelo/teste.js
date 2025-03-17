res.innerHTML = 'Tabuada <br>'
if(valor.value.length == 0){
    window.alert('Não deixe vazia caixa de texto')
}
for(let c = 1;c < 12; c++){
    let r = num * c
    res.innerHTML += `${num} x ${c} = ${r} <br>`
}