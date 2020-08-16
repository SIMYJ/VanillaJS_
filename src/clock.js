const clockContainer = document.querySelector(".js-clock");
clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours =date.getHours();
    const seconds =date.getSeconds();
    
    //#3.0 clockTitle.innerText = `${hours}: ${minutes} : ${seconds}`;
    //★☆ ★☆ ★☆ ★☆ ★☆ ★☆ ★☆ ★☆ ★☆ ★☆ ★☆ 
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }: ${
        minutes < 10 ? `0${minutes}` : minutes
    } : ${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {
    //#3.1
    getTime();
    setInterval(getTime, 1000)


}
init()


//function sayHi() {console.log("say hi")}
//setInterval(sayHi, 3000)
