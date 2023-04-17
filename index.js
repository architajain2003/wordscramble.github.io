const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField=document.querySelector("input"),
    refreshbtn = document.querySelector(".refresh-word"),
    checkbtn=document.querySelector(".check-word");

let correctWord,timer;

const initTimer = maxTime =>
{   clearInterval(timer);
    timer=setInterval(() =>
    {
        if(maxTime>0)
        {
            maxTime--;
            return timeText.innerHTML = maxTime;
        }
        clearInterval(timer);
        alert(`Time Out! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    },1000);
    
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");//splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) { 
        let j = Math.floor(Math.random() * (i + 1)); //getting random number
        //shuffling and swapping wordarray letter randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerHTML = wordArray.join("");
    hintText.innerHTML = randomObj.hint;
    correctWord= randomObj.word.toLowerCase();
    inputField.value="";
    inputField.setAttribute("maxlength",correctWord.length);
    // console.log(randomObj);
    // randomObj;
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert("Please enter a word check");
    // console.log(userWord);
    if(userWord!== correctWord)
        return alert(`oops! ${userWord} is not a correct word`);
        alert(`congrats! ${userWord.toUpperCase()} is not a correct word`);
    initGame();
}

refreshbtn.addEventListener("click", initGame);
checkbtn.addEventListener("click", checkWord);
