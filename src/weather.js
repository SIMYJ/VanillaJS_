const API_KEY = '669c95c5e8369c860024c15c6bd3f860';
const COORDS = 'coords';
const weather =document.querySelector(".js-weather");   
function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        //console.log(response);//서버에서 온 Response정보를 볼수 있다.
        //console.log(response.json());
        return response.json();
      
    })
    .then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText=  `지역:${place} 온도:${temperature} `;
    });
    }

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    //latitude에 latitude 저장, longitide에 longitide 저장
    // #3.8 6.23참조
    
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
    console.log(position);
}

function handGeoError(){
    console.log('Cant access');
}


//api navigator 쓸거임
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handGeoSucces, handGeoError);
    //첫번쨰 인자는 성공시 호출
    //두번째 인자는 실패시 호출
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null ){
        askForCoords();
    } else {
    //getwether
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();