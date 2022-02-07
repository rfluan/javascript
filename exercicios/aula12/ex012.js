var agora = new Date()
var agora2 = new Date()
var hora = agora.getHours()
var min = agora2.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} Minutos.`)

if (hora < 5) {
    console.log('Boa Madrugada')
} else if (hora < 12) {
    console.log('Bom Dia')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}