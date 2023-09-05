var monsterRedGage = document.getElementById("monsterred_gage");
var userRedGage = document.getElementById("userred_gage");
var attackButton = document.getElementById("attack_button");
var strongButton = document.getElementById("strong_button");
var healButton = document.getElementById("heal_button");
var userName = prompt("이름을 입력해 주세요"); 
document.getElementById('user_name').innerHTML = userName + "  HEALTH";



function monsterdamage(x) {
    mDamage = Math.floor(Math.random() * x)
    monsterRedGage.style.width = monsterRedGage.style.width - mDamage + "px"
    

}

function userdamage(x) {
    uDamage = 400-Math.floor(Math.random() * x)
    userRedGage.style.width = uDamage + "px"
    
}



attackButton.addEventListener('click', ()=> {

    monsterdamage(10)
    userdamage(20)
})

strongButton.addEventListener('click', ()=> {
    monsterdamage(50)
    userdamage(20)
})

healButton.addEventListener('click', ()=> {
    
})