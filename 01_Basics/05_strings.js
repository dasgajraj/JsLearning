const name= "Das Gajraj"
const repoCount=10;

console.log(name + repoCount + "Value")
console.log(`${name} ${repoCount} Value`) //Better STring Interpolation


const gameName = new String("new String")

console.log(gameName[0])
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt('7'))
console.log(gameName.indexOf('i'))

const newStr = gameName.substring(2,7)
console.log(`new String is ${newStr}`)

const newStr1 = gameName.slice(-7,7)
console.log(newStr1)

const spStr = "    space     .       "
console.log(spStr)
console.log(spStr.trim())


const replaceStr = "https://dasgajraj.com/das%20gajraj"
console.log(replaceStr)
console.log(replaceStr.replace("%20"," "))
console.log(replaceStr.includes("https"))


const strToArray = "das-gajraj-sharma"

console.log(strToArray)
console.log(strToArray.split('-'));

const array = strToArray.split("-");

console.log(array);
