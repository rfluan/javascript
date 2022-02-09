function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#F0CD9A'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#faab30'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#31586F'
    }
}