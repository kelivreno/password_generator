console.log("JS Connected")

let pwdElOne = document.getElementById("pwd-el-one");
let pwdElTwo = document.getElementById("pwd-el-two");

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let count = 0

function genPassword(){
    pwdNew = "";
    count++

    if (count == 1) {
        for (let i = 0; i < 15; i++ ) {
            randomI= Math.floor(Math.random()*characters.length)
            pwdNew += characters[randomI]
        }

        pwdElOne.textContent = pwdNew

    } else if (count == 2) {
        for (let i = 0; i < 15; i++ ) {
            randomI= Math.floor(Math.random()*characters.length)
            pwdNew += characters[randomI]
        }

        pwdElTwo.textContent = pwdNew
    }
   
}



