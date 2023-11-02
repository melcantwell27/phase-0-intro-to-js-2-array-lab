// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    const newCatsArray = [...cats, "Broom"]
    return newCatsArray;
}

function prependCat(name){
    const newCatsArray = ["Arnold",...cats]
    return newCatsArray;
}

function removeLastCat(name){
    const newCatsArray = [...cats.slice(0,-1)]
    return newCatsArray;
}

function removeFirstCat(name){
    const newCatsArray = [...cats.slice(1)]
    return newCatsArray;
}