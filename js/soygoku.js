function cargarPersonaje() { 
    let avatar = document.getElementById('avatar')
    let nombre = document.getElementById('nombre-personaje')
    let frase = document.getElementById('frase')
    let rdm = Math.floor(Math.random()*(10-1))+1 //numero random de 1 a 9
    avatar.src = "/images/"+rdm+".png"

    switch(rdm){
        case 1:
        nombre.innerHTML = 'Goku'
        frase.innerHTML = '"Oye, no te emociones, no nos has vencido todavía."'
        break
        case 2:
        nombre.innerHTML = 'Vegeta'
        frase.innerHTML = '"¿Qué sucede Freezer? ¿Tu cerebro es otro de tus músculos débiles y sin usar?"'
        break
        case 3:
        nombre.innerHTML = 'Bulma'
        frase.innerHTML = '"¡Que alguien me ayude! ¡Soy demasiado joven y bonita para morir!"' 
        break
        case 4:
        nombre.innerHTML = 'Piccoro'
        frase.innerHTML = '"Dejenme en paz,el que este verde no significa que no este maduro"'
        break
        case 5:
        nombre.innerHTML = 'Maestro Roshi'
        frase.innerHTML = '"Hay que trabajar, Hay que aprender, hay que comer, hay que descansar y tambien hay que jugar"'
        break
        case 6:
        nombre.innerHTML = 'Goku'
        frase.innerHTML = '"Prefiero ser un mono descerebrado que un monstruo sin corazón"'
        break
        case 7:
        nombre.innerHTML = 'Broli'
        frase.innerHTML = '"¿Qué es ser conciente?"'
        break
        case 8:
        nombre.innerHTML = 'Freezer'
        frase.innerHTML = '"Dudo que necesite una presentación, pero por si acaso, soy el poderoso Freezer y sí, todas las historias horribles que has escuchado son ciertas"'
        break
        case 9:
        nombre.innerHTML = 'Gohan'
        frase.innerHTML = '"¿Pelear contigo? Vengo a matarte"'
        break
        default:
        nombre.innerHTML = ''
        frase.innerHTML = ''
    }
}
cargarPersonaje()