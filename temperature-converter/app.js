function TempConverter(event) {

  let celsiusInput = document.getElementById("celsius").value;
  let fahrenheitInput = document.getElementById("fahrenheit").value;
  let kelvinInput = document.getElementById("kelvin").value;


  let fahrenheit =
    (celsiusInput * (9 / 5) + 32 )|| kelvinInput * (9 / 5) - 459.67;
  let celsius = (fahrenheitInput - 32) * (5 / 9) || kelvinInput - 273.15;
  let kelvin =
    celsiusInput + 273.15 || (fahrenheitInput - 32) * (9 / 5) + 273.15;

  if (event === "celsius") {
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("kelvin").value = kelvin;
  } else if (event === "fahrenheit") {
    document.getElementById("celsius").value = celsius;
    document.getElementById("kelvin").value = kelvin;
  } else {
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("celsius").value = celsius;
  }
  alert(event)
}
