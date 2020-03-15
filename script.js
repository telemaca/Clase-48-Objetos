// Volumen de caja
const size = { width: 2, length: 5, height: 1 } 

const getBoxVolume = (size) => {
    let volume = 1;
    for (let value of Object.values(size)) {

        volume *= value;
    }
    return volume
}

// getBoxVolume(size) // returns 10

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Redondeo
const round = (number) => {
    const redondeo ={
        floor: Math.floor(number),
        ceil: Math.ceil(number),
        round: Math.round(number)
    }
    return redondeo
}

// round(13.3) //  returns { floor: 13, ceil: 14, round: 13 }


// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Unión de objetos
const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}

const merge = (info1, info2) => {
    const resultado = {}
    for (const key in info1) {
        resultado[key] = info1[key] 
    }
    
    for (const key in info2) {
        if(!(key in resultado)) {
            resultado[key] = info2[key] 
        }
    }
    return resultado
}
// merge(info1, info2) // returns {a: 1, b: 2, c: 3, d: 4}

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Diferencia de objetos
// Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos
const differentiate = (info1, info2) => {
    const resultado = {}
    for (const key in info1) {
        if(!(key in info2)) {
            resultado[key] = info1[key] 
        }
    }
    for (const key in info2) {
        if(!(key in info1)) {
            resultado[key] = info2[key] 
        }
    }
    return resultado
}

// differentiate(info1, info2) // returns {a: 1, c: 3, d: 4}

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Eliminar propiedades
const data = {a: 1, b: 2, c: 3, d: 4, e: 5}
const props = ["b", "c", "e"]

const removeProperties = (data, props) => {
    const resultado = {}
    for (const key in data) {
        if (!(props.includes(key))) {
            resultado[key] = data[key]            
        }
    }
        
    return resultado
}

// removeProperties(data, props)

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Filtrar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array

const filterProperties = (data, props) => {
    const resultado = {}
    for (const key in data) {
        if (props.includes(key)) {
            resultado[key] = data[key]            
        }
    }
        
    return resultado
}

// filterProperties(data, props) // returns {b: 2, c: 3}

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Comprar productos
const buyProducts = (money, products) => {

    const newObject = Object.assign({}, products);

    for (const key in newObject) {
        if (newObject[key] <= money) {
            newObject[key] = true;
        } else {
            newObject[key] = false;
        }
    }

    return newObject

} // returns { cookies: true, chocolate: true, soda: false }


// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Comprar lista de productos
const canBuyAllProduct = (money, products) => {

    const newObject = Object.assign({}, products);
    let suma = 0;
    for (const key in newObject) {
        suma += newObject[key];
    }

    if (suma <= money) {
        return true;

    } else {
        return false;
    }
}

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Obtener experiencia
const score = { easy: 10, medium: 50, hard: 100 }
const challenges = { easy: 3, medium: 4, hard: 2 }
const getXP = (score, challenges) => {
    const { easy: cantidadFacil, medium: cantidadMedia, hard: cantidadDificil } = challenges;
    return ((score.easy * cantidadFacil) + (score.medium * cantidadMedia) + (score.hard * cantidadDificil))


} // returns 630 (3 * 10 + 4 * 50 + 2 * 100)

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Analizando strings
const string = "H3ll0 Wor1d";
const getStringInfo = (string) => {
    const chars = string.split("");
    const newObject = { letters: 0, digits: 0, spaces: 0 };


    for (const char of chars) {

        if (char === " ") {
            newObject.spaces++
        } else if (!isNaN(Number(char))) {
            newObject.digits++
        } else {
            newObject.letters++
        }
    }

    return newObject

} // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Analizando párrafos
const paragraph = "Do. Or do not. There is no try."

const getParagraphInfo = (paragraph) => {
    const chars = paragraph.split("")
    const words = paragraph.split(" ")
    const newObject = { letters: 0, words: 0, sentences: 0 };

    for (const char of chars) {
        if (char === ".") {
            newObject.sentences++
        } else if (char !== "." && 
        char !== " " && 
        char !== "," && 
        char !== ";") {
            newObject.letters++
        }
    } 

    newObject.words = words.length

    return newObject
}

// getParagraphInfo(paragraph) // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Contar palabras
const text = "El que compra Pocas Capas pocas capas paga"
const countWords = (text) => {
    const newObject = {}
    const newText = text.toLowerCase()
    const words = newText.split(" ")

    for (const word of words) {
        newObject.word
        newObject[word] = 0
    }

    for (const key in newObject) {
        for (const word of words) {
            if (key === word) {
                newObject[key]++
            }
        }
    }

    return newObject
}

// countWords(text) // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Parámetros de búsqueda
const url = "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
const parseQueryParams = (url) => {
    const splitUrl = url.split("?")
    const parametersToSplit = splitUrl[1].split("&")
    const parameters = []
    const newObject = {}
    for (const parameterToSplit of parametersToSplit) {
        parameters.push(parameterToSplit.split("="))
    }
    for (const parameter of parameters) {
        const objectParameter = parameter[0]
        newObject.objectParameter
        newObject[objectParameter] = parameter[1]
    }

    return newObject
}

// parseQueryParams(url) // returns { keyword: "objects", language: "javascript", level: "intermediate" }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Ocurrencias en palabra
// Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras que hay en cada palabra. La función debería tener un parámetro opcional que permite definir si va a ser sensible al caso o no (si "A" y "a" cuentan como dos letras distintas o no)
const text2 = "Hello World I am new here"
const letters = ["o", "l", "e"]
const caseSensitive = false
// const findOcurrencies = (text, letters, caseSensitive = true) => {
//     const words = caseSensitive === true ? text.split(" ") : text.toLowerCase().split(" ")
//     const result = {}
//     for (const word of words) {
//         const ocurrencies = {}
//         // ocurrencies[letter] = 0
//         for (let i = 0; i < word.length; i++) {
//             if (letters.includes(word[i])) {
//                 ocurrencies.letter++            
//             }            
//         }
//         result[word] = ocurrencies
//     }
//     return result
// }

const findOcurrencies = (text, letters, caseSensitive = true) => {
    const words = caseSensitive === true ? text.split(" ") : text.toLowerCase().split(" ")
    const result = {}

    for (const word of words) {
        const ocurrencies = {}
        for (const letter of letters) {
            ocurrencies[letter] = 0
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    ocurrencies[letter]++
                }
            }
        }
        result[word] = ocurrencies
    }
    return result
}

findOcurrencies(text2, letters, caseSensitive)

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Batalla
// Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: daño = ataque - defensaEnemigo y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 }
const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 }
const fighterACopy = {...fighterA}
const fighterBCopy = {...fighterB}
const {name: nameA, attack: attackA, defense: defenseA} = fighterACopy
let lifeA = fighterACopy.life
const {name: nameB, attack: attackB, defense: defenseB} = fighterBCopy
let lifeB = fighterBCopy.life
const damagePlayerA = attackA - defenseB
const damagePlayerB = attackB - defenseA

const fight = (fighterA, fighterB) => {
    const result = { rounds: 0 }
    while (lifeA > 0 && lifeB > 0) {
        lifeB -= damagePlayerA
        lifeA -= damagePlayerB
        result.rounds++
    }
    if (lifeA <= 0) {
        result.winner = nameB
    } else if (lifeB <= 0) {
        result.winner = nameA
    }

    return result
}

fight(fighterA, fighterB) // returns { rounds: 3, winner: "Chun-Li"}