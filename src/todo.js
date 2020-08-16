const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";

/*
function filterFn(toDo){
  return toDo.id === 1
}*/

let toDos = [];//const -> let

function deletedToDo(event){
  //console.log(event);
  //console.dir(event.target);//이벤트의 정보 보야줌/ 부모의 아이디를 찾을수 있따.
  const btn = event.target;//이벤트 객체
  const li = btn.parentNode;//이벤트 객체의 부모
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);// toDo id타입과 li의 id 타입 다름
  });
  toDos = cleanToDos;
  SaveToDos();
  
  //const cleanToDos = toDos.filter(filterFn);
  /*  toDos.filter함수
  filter는 마치 ForEach에서 function을 실행하는 것 같이 각각의 item과 같이 실행이 됨
  creanToDos와 filter가 하는것은 filterFn이 체크가 된 아이템드르이 array를 주는 것이다.
  */
}

function SaveToDos(){
  //localStorage.setItem(TODOS_LS, toDos);
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringify는 자바스크립트 object를 String으로 바꿔줌
}

function paintToDo(text) {
  const li = document.createElement("li");//리스트목록 생성
  const delBtn = document.createElement("button");//버튼 생성
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click",deletedToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  SaveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if (loadedToDos !== null) {
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function (toDo) {
                //console.log(toDo.text);
                paintToDo(toDo.text);
            });
        }
    }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  //console.log("todo.ls 실행");
}

init();