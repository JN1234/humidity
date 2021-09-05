function getData() {
  var humidityVal = document.getElementById("humidity-val");

  var tempVal = document.getElementById("temp-val");

  var humidityUnit = document.getElementById("humidity-unit");
  var baseUrl = window.location.origin;
  fetch(`${baseUrl}/data`)
    .then((response) => response.json())
    .then((result) => {
      humidityVal.innerText = result.data[0].humidity + "/";

      tempVal.innerText = result.data[0].temperature;
    });
}
