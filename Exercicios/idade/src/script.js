function idade() {
    let ano = document.getElementById('ano')
    let masc = document.getElementById('masc')
    let fem = document.getElementById('fem')

    ano_nasc = Number(ano.value)
    

    if (ano_nasc == 0 || ano_ <= 3) {
        alert('dados incorretos')
    }
}