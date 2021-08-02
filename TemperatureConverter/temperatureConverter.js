document.addEventListener("DOMContentLoaded", function () {
    var inputFieldText = document.getElementById("celsius-temperature");
    var fahrenheitTemperature = document.getElementById("fahrenheit-temperature");
    var kelvinTemperature = document.getElementById("kelvin-temperature");
    var errorMessage = document.querySelector(".error-message");

    document.querySelector(".button").addEventListener("click", function () {
        var inputText = inputFieldText.value.trim();

        if (inputText.length === 0) {
            errorMessage.textContent = "Введите число";
            fahrenheitTemperature.textContent = "";
            kelvinTemperature.textContent = "";
            return;
        }

        var celsiusTemperature = Number(inputText);

        if (isNaN(celsiusTemperature)) {
            errorMessage.textContent = "Введите число";
            fahrenheitTemperature.textContent = "";
            kelvinTemperature.textContent = "";
            return;
        }

        errorMessage.textContent = "";

        function getFahrenheitTemperature(celsiusTemperature) {
            return (celsiusTemperature * 9 / 5 + 32).toFixed(2);
        }

        function getKelvinTemperature(celsiusTemperature) {
            return (celsiusTemperature + 273.15).toFixed(2);
        }

        fahrenheitTemperature.textContent = getFahrenheitTemperature(celsiusTemperature);
        kelvinTemperature.textContent = getKelvinTemperature(celsiusTemperature);
    });
});