document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value.trim();
    const unitSelect = document.getElementById('unitSelect').value;
    const resultContainer = document.getElementById('result');
  
    if (temperatureInput === '' || isNaN(temperatureInput)) {
      resultContainer.textContent = 'Please enter a valid temperature.';
      return;
    }
  
    let convertedTemperature;
    if (unitSelect === 'fahrenheit') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
      resultContainer.textContent = `${temperatureInput} Fahrenheit is ${convertedTemperature.toFixed(2)} Celsius.`;
    } else if (unitSelect === 'celsius') {
      convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
      resultContainer.textContent = `${temperatureInput} Celsius is ${convertedTemperature.toFixed(2)} Fahrenheit.`;
    }
  });
  