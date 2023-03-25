const monsterHealthBar = document.getElementById('monster_health_bar');
const playerHealthBar = document.getElementById('player_health_bar');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');


function adjustHealthBars(maxValue){
    monsterHealthBar.max = maxValue;
    playerHealthBar.max = maxValue;

    monsterHealthBar.value = maxValue;
    playerHealthBar.value = maxValue;
}

function dealMonsterDamage(damage){
    const dealDamage = Math.random() * damage;
    return +monsterHealthBar.value - dealDamage;
}


