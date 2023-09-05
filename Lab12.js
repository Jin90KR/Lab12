var monsterRedGage = document.getElementById("monsterred_gage");
var userRedGage = document.getElementById("userred_gage");
var attackButton = document.getElementById("attack_button");
var strongButton = document.getElementById("strong_button");
var healButton = document.getElementById("heal_button");
var userName = prompt("이름을 입력해 주세요"); 
document.getElementById('user_name').innerHTML = userName + "  HEALTH";



function monsterdamage(x) {
    var mDamage = Math.floor(Math.random() * x)
    monsterRedGage.style.width = monsterRedGage.offsetWidth - mDamage + "px"
    console.log(typeof monsterRedGage.offsetWidth)

}

function userdamage(x) {
    var uDamage = Math.floor(Math.random() * x)
    userRedGage.style.width = userRedGage.offsetWidth - uDamage + "px"
    
}

function heal(x) {
    userRedGage.style.width = userRedGage.offsetWidth + x + "px"
}



attackButton.addEventListener('click', ()=> {

    monsterdamage(25)
    userdamage(30)
})

strongButton.addEventListener('click', ()=> {
    monsterdamage(60)
    userdamage(40)
})

healButton.addEventListener('click', ()=> {
    heal(30)
})