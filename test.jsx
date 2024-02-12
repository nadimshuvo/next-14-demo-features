function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
}

function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}

class Calculator extends React.Component() {
  state = {
    temperature: "",
    scale: "",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convertTo(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convertTo(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

// converter component
