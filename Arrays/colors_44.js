//a)Define and Log the colors Array:

const colors = ["red", "green", "blue"];
console.log(colors)

//b)Modify and Add color elements:
colors[1] = 'yellow'
console.log(colors[1])
colors.push("brown")
console.log(colors)

//c)Iterate using Loops over the colors Array:

for (let i = 0; i < colors.length ; i++){
    console.log(colors[i]);
}

//while loop
let j = 0;
while (j < colors.length) {
    console.log(colors[j]);
    j++;
}
//for....of
for (const color of colors) {
    console.log(color)
}

//d)Check Array Properties:
console.log(typeof (colors))
console.log(colors.length)

//e)Array Methods:
colors.push("whiteSmoke")
console.log(colors)
colors.pop()
console.log(colors)
console.log(colors.indexOf("blue"))

//f)Add and Iterate Over Properties:
colors.owner = "Tamilselvam"
console.log(colors)

for (let property in colors) {
    console.log(`${property}:${colors[property]}`)
}
