function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var btn = window.document.getElementById('button')
var data = new Date
var hora = data.getHours()

    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora  >= 0 && hora <12) {
        //Bom dia
        img.src = 'fotomanha.jpg'
        
        document.body.style.background = '#e2cd9f'
    }else if(hora > 12 && hora <= 18){
        //Boa noite
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Bom dia
        img.src = 'fotonoite.jpg'
        document.body.style.background ='#515154'
    }
    
}