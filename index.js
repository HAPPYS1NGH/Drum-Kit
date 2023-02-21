let x =document.querySelectorAll('.drum');
function playSound(choice) {
    switch (choice) {
        case 'w':
            let crash = new Audio('sounds/crash.mp3') ;
            crash.play();
            break;
        case 'a':
            let kickbass = new Audio('sounds/kick-bass.mp3') ;
            kickbass.play();
            break;
        case 's':
            let snare = new Audio('sounds/snare.mp3') ;
            snare.play()
            break;
        case 'd':
            let tom1 = new Audio('sounds/tom-1.mp3') ;
            tom1.play()
            break;
        case 'j':
            let tom2 = new Audio('sounds/tom-2.mp3') ;
            tom2.play()
            break;
        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3') ;
            tom3.play()
            break;
        case 'l':
            let tom4 = new Audio('sounds/tom-4.mp3') ;
            tom4.play()
            break;
        default:
            console.log(choice)
            break;
    }
}

for (let index = 0; index < x.length; index++) {
    x[index].addEventListener("click" , function (){
        let btnInnerHTML = this.innerHTML;
        playSound(btnInnerHTML)
        buttonAnimation(btnInnerHTML)})
}


document.addEventListener("keypress" , function name(event) {
  playSound(event.key.toLowerCase())
  buttonAnimation(event.key.toLowerCase())
})

function buttonAnimation(currentKey) {
    let activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed")
    setTimeout(() => {
        activeKey.classList.remove("pressed")
    }, 100);
}

// addEventListener("click" , handleClick) ==> used to add event  1 parameter is the trigger event and 2 function to what to do
// Use loops after selecting from querySelectorAll

// new Audio let us play by using .play() function
// Use classList and add and remove classes for animation using setTimeout


// Used a lot of brain
// let handleClick = (name)=>{
//     let element = document.querySelector("."+name);
//     let backgroundImageUrl = getComputedStyle(element).backgroundImage;
//     console.log(backgroundImageUrl)
//     let soundTrackmp3= backgroundImageUrl.slice(-11,-6)
//     console.log(soundTrackmp3)

//     let audioSrc = "sounds/"+cbcbc+".mp3";
//     console.log(audioSrc)

//     let audio = new Audio(audioSrc);
//     audio.play();
// }
