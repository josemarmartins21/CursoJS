function contar () {
    let num1 = document.getElementById('n1')
    let num2 = document.getElementById('n2')
    let p = document.getElementById('passo')
    let res = document.getElementById('res')
    

    if (num1.value.length == 0 || num2.value.length == 0 || p.value.length == 0) {
        alert('Preencha os dados!')
    } else {
        let i = Number(num1.value)
        let f = Number(num2.value)
        let passo = Number(p.value)
        res.innerHTML = 'Contando'
        if (i < f) {
            for (let c = i; c <= f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } 
    }
}