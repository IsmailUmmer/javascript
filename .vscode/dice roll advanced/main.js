




function roll() {
    noOfRoll = document.getElementById("noOfRoll").value;
    resultDice = document.getElementById("resultDice");
    resultImages = document.getElementById("resultImages");

    const values = [];
    const images = [];

    for (i = 0; i < noOfRoll; i++) {
        const random = Math.floor(Math.random() * 6) + 1;
        values.push(random);
        console.log(values);
        images.push(`<img src = "dice_images/${random}.png" alt="dice_images/${random}.png">`);
    }

    document.getElementById("resultImages").innerHTML = images.join('');

}

