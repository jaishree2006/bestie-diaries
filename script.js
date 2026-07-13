function startJourney(){

    let music = document.getElementById("bgMusic");

    music.volume = 0.5;

    music.play()
    .then(() => {
        console.log("Music started");
    })
    .catch(error => {
        console.log("Music blocked", error);
    });


    document.querySelector(".hero").style.display="none";

    document.getElementById("content").style.display="block";

}
function showLetter(){

document.getElementById("secretMessage").innerHTML =
"Happy Birthday My Bestie 💗 <br><br>" +
"Thank you for all the beautiful memories. " +
"May your future be filled with happiness, success and endless smiles ✨";

}
