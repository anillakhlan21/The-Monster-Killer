

const ATTACK_DAMAGE=100;
const STRONG_ATTACK_DAMAGE=200;

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click",strongAttackHandler);
healBtn.addEventListener("click",healHandler);
logBtn.addEventListener("click",logHandler);


function attackHandler(){
    dealMonsterDamage(ATTACK_DAMAGE);
}

function strongAttackHandler(){
    dealMonsterDamage(STRONG_ATTACK_DAMAGE);
}

function logHandler(){

}

function healHandler(){
    playerHealthBar.value = +playerHealthBar.value+ 30;
}