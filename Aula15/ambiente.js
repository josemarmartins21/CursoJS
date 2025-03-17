let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vector tem ${num.length} posições`)
console.log(`O primeiro valor do vector é ${num[0]}`)
//console.log(`Nosso vctor é ${num}`)
let pos = num.indexOf(2)
if(pos <= -1) { 
    console.log(`O valor não foi encontrado!`)
    
}else{
    console.log(`O valor está na posição ${pos}`)
}