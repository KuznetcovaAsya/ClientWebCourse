document.addEventListener("DOMContentLoaded", function () {
    var inputFieldText = document.getElementById("celsius-temperature");
    var fahrenheitTemperature = document.getElementById("fahrenheit-temperature");
    var kelvinTemperature = document.getElementById("kelvin-temperature");
    var errorMessage = document.getElementById("error-message");

    document.getElementById("button").addEventListener("click", function () {
        var celsiusTemperature = inputFieldText.value;
        var chars = celsiusTemperature.split('');

        if (isNaN(celsiusTemperature) || celsiusTemperature === "") {
            errorMessage.textContent = "Введите число"
            inputFieldText.value = "";
            fahrenheitTemperature.textContent = "";
            kelvinTemperature.textContent = "";
            return;
        }

        errorMessage.textContent = "";

        fahrenheitTemperature.textContent = parseFloat(celsiusTemperature) * 9 / 5 + 32;
        kelvinTemperature.textContent = parseFloat(celsiusTemperature) + 273.15;
    });
});