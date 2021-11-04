// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Limpio array dejando solo números
const ereaseNotNum=(arr, func)=>{
    let cleanArray = []
    for(let index in arr){
        cleanArray.push(func(arr[index])) 
    };
    return cleanArray
};
// Separo en una función el condicional que filtra los números. 
const ifFunction=(element)=>{
    let num= 0
    if (typeof element === 'number'){
        num=element
    };
    return num
};

//---------------------------------------------------------------------------------------------------------------------------
//Ejercicio 1: Crea una función que ordene de menor a mayor el array sequence.

const orderedArray=(arr)=>{
    let cleanedArray = ereaseNotNum(arr,ifFunction);
//recorro el array con dos loops para comparar en cada iteración con el elemento anterior. 
    for(let i= 0; i<cleanedArray.length; i++){
        for(let j=0; j<i; j++){
//Llamo a la función que hace el switch           
            auxOne(cleanedArray,i,j)
        }
    }
    return cleanedArray   
}
// Si el segundo elemento es mayor al primero, hago un switch. Declaro variable temporal para no perder el primer elemento que compara.
const auxOne=(array, indexI, indexJ)=>{
    if(array[indexI]<array[indexJ]){
        let temp= array[indexI]
        array[indexI]=array[indexJ]
        array[indexJ]=temp
    }
}
console.log(orderedArray(sequence))
//-------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 2 Crea una funcion que ordene de mayor a menor el array sequence.
const invertedArray=(arr)=>{
    let cleanedArray = ereaseNotNum(arr,ifFunction);
//recorro el array con dos loops para comparar en cada iteración con el elemento anterior. 
    for(let i= 0; i<cleanedArray.length; i++){
        for(let j=0; j<i; j++){
//Llamo a la función que hace el switch
            auxOneRev (cleanedArray,i,j)
            
        }
    }
    return cleanedArray   
}

// Si el segundo elemento es menor al primero, hago un switch. Declaro variable temporal para no perder el primer elemento que compara. 
const auxOneRev=(array, indexI, indexJ)=>{
    if(array[indexI]>array[indexJ]){
        let temp= array[indexI]
        array[indexI]=array[indexJ]
        array[indexJ]=temp
    }
}

console.log(invertedArray(sequence))
//-------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 3 Crea una funcion que que calcule la media aritmética de los datos en el array Sequence.
const average=(arr)=>{
    let cleanedArray = ereaseNotNum(arr,ifFunction);
//Obtengo la media aritmetica dividiendo la suma de todos los elementos entre el número de los elementos.    
  return  allElements(cleanedArray)/arrLength(cleanedArray) 

};

//Función que me da el número total de elementos
const arrLength=(array)=>{
    return array.length
};
const allElements=(array)=>{
//Declaro variable en cero para poder sumar cada item del array
    let total=0
    for(let i in array){
        total+=array[i]
    }
    return total
};
console.log(average(sequence))

//-------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 4 DNI.
//inputs del usuario
let dniUser = 52060548;
let letterUser = 'W';

//Función principal (alto orden)
const checkDniNumber=(num, char)=>{
//compruebo que el número sea correcto
    if(num<0 || num>99999999){
        console.log('Número de DNI incorrecto')
    }
//si el número es correcto, calcula la letra que corresponde al número puesto por el usuario. Luego compara la letra correcta con la letra que puso el usuario.
    else {
        let theRightLetter= checkDniLetter(num, letrasDNI)
        compareLetter(char, theRightLetter)
    }
}

// Función que calcula la letra que corresponde según el número ingresado por el usuario.
const checkDniLetter=(num,arrOfLetters)=>{
    let char ='';
    for (let i = 0; i < arrOfLetters.length; i++){
        if (num % 23===i){
            char=arrOfLetters[i]
        }
    }
     return char
}

//Función que compara la letra ingresada por el usuario con la letra correcta.
const compareLetter=(userChar,rightlett)=>{
    if (userChar===rightlett){
        console.log('Número y letra correctos')
    }
    else {
        console.log('Letra no es correcta')
    }
}

// Llamo a la función principal con los parámetros que son los input del usuario. (no hago console.log ya que en la función compareLetter hago los console.log)
checkDniNumber(dniUser, letterUser)

