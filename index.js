
console.log("sds")
const showData = (data, cityname) => {
  let table = document.getElementById("table");
  let date = new Date();
  let rowHtml = `<tr id="cityname">
                        <td>${cityname}</td>
                        <td><input type="text" value="${data.description}"/></td>
                        <td>${data.temp_in_celsius}</td>
                        <td>${data.pressure_in_hPa}</td>
                        <td>${data.date_and_time}</td>
                        <td><button class="deleteBtn" onclick="remove(this)">Delete</button></td>
                    </tr>`;
  table.innerHTML += rowHtml;
};
async function getData(cityname) {
  const response = await fetch(
    `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityname}`
  );
  const data = await response.json();
  console.log(data);
  showData(data, cityname);
}
function remove(el) {
  var tbl = el.parentNode.parentNode.parentNode;
  var row = el.parentNode.parentNode.rowIndex;

  tbl.remove(row);
}

let london = document.getElementById("London");
let newYork = document.getElementById("New York");
let losAngelese = document.getElementById("Los Angeles");
let lasVegas = document.getElementById("Las Vegas");

let getWatherbtn = document.getElementById("getWatherbtn");
let count = 0;
getWatherbtn.addEventListener("click", () => {
  if (count == 0) {
    london.style.border = "2px solid green";
    getData(london.innerHTML);
  } else if (count == 1) {
    newYork.style.border = "2px solid green";
    getData(newYork.innerHTML);
  } else if (count == 2) {
    losAngelese.style.border = "2px solid green";
    getData(losAngelese.innerHTML);
  } else if (count == 3) {
    lasVegas.style.border = "2px solid green";
    getData(lasVegas.innerHTML);
  }
  count++;
});

const city = document.getElementById("input");
const searchBtn = document.getElementById("btn");

let getWeatherInput= () =>{
    let cityValue = city.value;
    if(cityValue==0){
        alert("Please Enter City Name");
    }else{
       console.log(cityValue);
    }
}