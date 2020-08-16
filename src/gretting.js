const form = document.querySelector(".js-form"); //쿼리설렉터(원하는 설렉터 다 가져옴)
input = form.querySelector("input");
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); //텍스트박스에 입력후 엔터시 텍스트 사리지는데 이거 하면 그대로 남아 있음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    
}
function askForNmae() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit); //
}

function paintGreeting(text) {
    //form.classList.remove(SHOWING_CN); 시발 이거 아님
    form.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `😀안녕 ${text} 🎈`;

}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS); //localStorage는 웹상의 로컬스토리지

    //localstorage에 currentUser가 없어야 동작
    if (currentUser === null) {
        // she is
        askForNmae();
        console.log("첫번째");
        

    } else {
        //she is
        paintGreeting(currentUser);
        console.log("두번째");
    }
}

function init() {
    loadName();

}
init();