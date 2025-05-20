function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var idade = ano - Number(fano.value)
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Preencha os dados acima')
    }else{
        res.innerHTML = `A idade calculada é de ${idade}`
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        var genero = ''
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src','rapaz.png')

            }else if(idade > 10 && idade < 21){
                //adolescente
                img.setAttribute('src','jovemhomem.png')
            }else if(idade > 21 && idade < 50){
                //adult
                img.setAttribute('src','homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src','homemidoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 10){
                //miuda
                img.setAttribute('src','miuda.png')
            }else if(idade > 10 && idade < 21){
                //Adolescente
                img.setAttribute('src','moca.png')
            }else if(idade > 21 && idade < 50){
                //Senhora
                img.setAttribute('src','adulta.png')
            }else{
                //Idosa
                img.setAttribute('src','idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}