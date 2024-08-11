const Url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const key="&appid=1a467bc556d33572912d2af67d2ac924"
let  CityName=document.querySelector(".input input")
let button=document.querySelector(".input button")
let weather_icon=document.querySelector(".weather img");
async function weatherDisplay(city){
     let data=await fetch(Url+city+key);
     let responce=await data.json();
     console.log(responce)
     let temp=document.querySelector(".temp").innerText=Math.round(responce.main.temp)+"°c";
     let city_name=document.querySelector(".city-name").innerText=responce.name;
     let humidity=document.querySelector(".humidity-info").innerText=responce.main.humidity+"%";
     let wind=document.querySelector(".wind-info").innerText=responce.wind.speed+" Km/h";

     if(responce.weather[0].main==="Haze"){
        weather_icon.src="images/mist.png"
     }
     else if(responce.weather[0].main==="Clear"){
       weather_icon.src="images/clear.png"
     }
     else if(responce.weather[0].main==="Clouds"){
       weather_icon.src="images/clouds.png"
     }
     else if(responce.weather[0].main==="Rain"){
        weather_icon.src="images/rain.png"
     }
     else if(responce.weather[0].main==="Snow"){
        weather_icon.src="images/snow.png"
     }
     else if(responce.weather[0].main==="Mist"){
        weather_icon.src="images/mist.png"
     }
     else if(responce.weather[0].main==="Thunderstorm"){
        weather_icon.src="images/drizzle.png"
     }


    
}
button.addEventListener("click",()=>{
    weatherDisplay(CityName.value)
})

