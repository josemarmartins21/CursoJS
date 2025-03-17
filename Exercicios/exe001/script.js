function clicar() {
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var res = document.getElementById('res')
    var num = Number(txt1.value)
    var num2 = Number(txt2.value)
    var s = num + num2
    res.innerHTML = `A soma entre ${num} e ${num2} é ${s}`
}