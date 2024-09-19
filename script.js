function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	if (word === base) {
		return true
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missplaced = [];
        let underscores = [];

        let arrayBase = base.split('');
        let arrayWord = word.split('');
    
		for (let i = 0; i < arrayBase.length; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
                underscores.push(arrayWord[i])
            } else if (arrayBase.includes(arrayWord[i])) {
                missplaced.push(arrayWord[i])
                underscores.push('_')
            } else if (!arrayBase.includes(arrayWord[i]) && arrayWord[i] !== undefined){
                notInWord.push(arrayWord[i])
                underscores.push('_')
            } else {
                underscores.push('_')
            }
        }
    
        return { 
            wellPlaced: wellPlaced, 
            missplaced: missplaced, 
            notInWord: notInWord,
            underscores: underscores 
        }
    }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
    // console.log(result)
    if (result === true) {
        document.getElementById("try").innerText = word
        document.getElementById("well").innerText = ''
        document.getElementById("miss").innerText = ''
        document.getElementById("not").innerText = ''
        document.getElementById("win").innerText = 'Vous avez gagné'
        return
    }
    document.getElementById('underscores').innerText = result.underscores.join(' ')
    document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
    document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')

}