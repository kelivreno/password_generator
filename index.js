console.log("JS Connected")

let pwdElOne = document.getElementById("pwd-el-one");
let pwdElTwo = document.getElementById("pwd-el-two");

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]



function genPassword(){
    let pwdOne= ""
    let pwdTwo= ""

    for (let i = 0; i < 15; i++ ) {
            
            let randomIOne= Math.floor(Math.random()*characters.length)
            let randomITwo= Math.floor(Math.random()*characters.length)

            pwdOne += characters[randomIOne]
            pwdTwo += characters[randomITwo]
        }

    pwdElOne.textContent = pwdOne
    pwdElTwo.textContent = pwdTwo
}



