var idade = 85
console.log(`Voecê tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
    
}else if(idade < 18 || idade > 65){
    console.log('Voto opicional')
    
}else if (idade > 18){
    console.log('Voto obrigatório')
}