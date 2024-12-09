const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const showKeys = document.querySelector(".keys-checkbox input");

let allKeys  = [];
let audio = new Audio("tunes/a.wav");

const playTune = (key)=>{
    audio.src = `tunes/${key}.wav`;  
    audio.play(); //playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150)
}

pianoKeys.forEach((key) => {
    allKeys.push(key.dataset.key);
    key.addEventListener('click',()=> playTune(key.dataset.key));  
})


const pressedKey = (e)=>{
    if(allKeys.includes(e.key)){
        playTune(e.key);//key=> is one of the property in pressedkey
    }
}

function blockKeys(){
    pianoKeys.forEach((key)=> key.classList.toggle("hide"));
    
}

showKeys.addEventListener('click', blockKeys);

volumeSlider.addEventListener("input", (e)=> audio.volume = e.target.value);
document.addEventListener('keydown', pressedKey);