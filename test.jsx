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
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
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
