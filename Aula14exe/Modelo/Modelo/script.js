function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
   
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Preencha os dados!')
    }else{
        let radsex = document.getElementsByName('fsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (radsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 14) {
                img.setAttribute('src','rapaz.png')
            } 
        } else if (radsex[1].checked) {
            genero = 'Mulher'
            
        }
        res.appendChild(img)
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}` 
    } 
}
