function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
   
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'rapaz.png')
            }else if(idade > 14 && idade <= 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            }else if(idade > 21 && idade < 50){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src','homemidoso.png')
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade > 4 && idade < 10) {
                //criança
                img.setAttribute('src','criançamulher.png')
            }else if(idade <= 4){
                img.setAttribute('src','alicia.png')
            }
            }else if(idade > 14 && idade <= 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if(idade > 21 && idade < 50){
                //adulta
                img.setAttribute('src','fotoadulta.png')
            }else{
                //idosa
                img.setAttribute('src','fotoaidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
     
      
    }
}