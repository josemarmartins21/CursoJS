function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var hora = 8
    
    msg.innerHTML = `São exatamente ${hora} horas`
    
    if (hora > 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.jpg'
        window.document.body.style.background = '#e2cd9f'
        
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'fototarde.jpg'
        window.document.body.style.background = '#b9846f'
        
    }else{
        //Boa noite
        img.src = 'fotonoite.jpg'
        window.document.body.style.background = '#515154'
    }
}

