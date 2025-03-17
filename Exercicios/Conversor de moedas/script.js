function converter() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    if (num.value.length == 0) {
        window.alert('Preencha o formulário')
    }else{
        let n = Number.parseFloat(num.value)
        let c = n * 912
        res.innerHTML = `<strong>${c}</strong>KZ`
    }

  

    }
