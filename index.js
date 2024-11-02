
function rollDice(){
    const totalRoller = document.getElementById("numID").value;
    const diceInfo = document.getElementById("diceInfo");
    const imageInfo = document.getElementById("imageInfo");
    let diceValues = [];
    let images = [];

    for(let i=0;i<totalRoller;i++){
        let random = Math.floor(Math.random()*6)+1;
        diceValues.push(random);
        images.push(`<img src="${random}.svg"/>`);
    }

    diceInfo.textContent = `Dice: ${diceValues.join(", ")}`;
    imageInfo.innerHTML = images.join('');
}