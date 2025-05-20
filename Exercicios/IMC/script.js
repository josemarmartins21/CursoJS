function imc() {
    let p = document.getElementById('peso')
    let a = document.getElementById('altura')
    let r = document.getElementById('res')
    let nome = document.getElementById('nome')

    let imc = Number(p.value) / Number(a.value) ^ 2

    if (nome.value.length != null && p.value.length > 0 && a.value.length > 0) {
    let n = nome.value
  
    if (imc < 18.5) {
        //magreza
        
        r.innerHTML = `Olá, ${nome.value} voce é magro e o seu imc é de ${imc}`
        
    } else if (imc > 18.5 || imc <= 24.9) {
        //peso normal
        r.innerHTML = `Olá, ${n} voce tem peso normal e o seu imc é de ${imc}`

    } else if (imc > 25.0 || imc <= 29.9) {
        //sobrepeso
        r.innerHTML = `Olá, ${nome} voce é sobrepeso e o seu imc é de ${imc}`


    } else if (imc > 30.0 || imc < 34.9) {
        //obesidade I grau
        r.innerHTML = `Olá, ${nome} voce é obeso e o seu imc é de ${imc}`

    } else if (imc > 35.0 || 39.9) {
        //obesidade grau II
        r.innerHTML = `Olá, ${nome} voce é tem obesidade morbida de grau II e o seu imc é de ${imc}`

    }  else if(imc > 40.0) {
        //Obesidade grau III
        r.innerHTML = `Olá, ${nome} voce é tem obesidade morbida de grau III e o seu imc é de ${imc}`

    }
} else {
    alert('Insira todos os dados')
}
}