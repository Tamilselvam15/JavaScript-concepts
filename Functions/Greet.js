
//a)Greet Function:
function greet(name) {
    let greetings = '"'+'Hello,' +' '+ name+'!"';
    return greetings
}
console.log(greet('Tamil'))


//b)GreetDefault Function:

function greetDefault() {
    const name='Guest'
    return '"' + 'Hello,' + ' ' + name + '!"';
}
console.log(greetDefault())


//c)Rewrite Greet as a Function Expression:


const greetFunction=function(name) {
    let greetings = '"' + 'Hello,' + ' ' + name + '!"';
    return greetings
}
console.log(greetFunction('bala'))

//d)Rewrite Greet as an Arrow Function:

const arrowFunction = (name) => {
    return name
}
console.log(arrowFunction('Anbu'));