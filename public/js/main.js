const $excuseBuffer = document.querySelector('.excuse-buffer');
const $excuseBtn = document.querySelector('.excuse-btn');

const intro = {
    1: "Sorry I can't come",
    2: "Please forgive my absence",
    3: "This is going to sound crazy but",
    4: "Get this:",
    5: "I can't go because",
    6: "I know you're going to hate me but",
    7: "I was minding my own business and boom",
    8: "I feel terrible but",
    9: "I regretfully cannot attend",
    10: "This is going to sound like an excuse but"
}

const mid = {
    1: "my nephew",
    2: "the ghost of Hitler",
    3: "the Pope",
    4: "my ex",
    5: "a high school marching band",
    6: "Dan rather",
    7: "a sad clown",
    8: "the kid from Air Bud",
    9: "a professional cricket team",
    10: "my Tinder date"
}

const delay = {
    1: "just shit the bed",
    2: "died in front of me",
    3: "won't stop telling me knock knock jokes",
    4: "is having a nervous breakdown",
    5: "gave me syphillis",
    6: "poured lemonade in my gas tank",
    7: "stabbed me",
    8: "found my box of human teeth",
    9: "stole my bicycle",
    10: "posted my pictures on instagram"
}


const generateRandom = () => {
    return Math.floor((Math.random() * 10) + 1);
}

const generateExcuse = () => {
    return `${intro[generateRandom()]} ${mid[generateRandom()]} ${delay[generateRandom()]}`;
} 


$excuseBtn.addEventListener('click', function(e) {
    console.log('clicked');
    e.preventDefault();
    $excuseBuffer.innerHTML = generateExcuse();
})