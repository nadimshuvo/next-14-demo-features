class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji}${text}${emoji}`;

  render() {
    return this.props.children({ addE: this.addEmoji });
  }
}

function Text({ addEmoji }) {
  let text = "I am jS";
  if (addEmoji) text = addE(text, "");
}

// function App() {
//     return (
//         <Emoji>
//             {({addE}) => {
//                 <Text addEmoji={addE} />
//             }}
//         </Emoji>
//     )
// }

function App() {
  return (
    <div className="app">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

const ClickCounter = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <button>Clicked {count} times.</button>
    </div>
  );
};

// export default withCounter(ClickCounter);

// withCounter

const withCounter = (OC) => {
  class NewC extends React.Component {
    state = {
      count: 0,
    };

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState + 1 }));
    };

    render() {
      return (
        <OC count={this.state.count} incrementCount={this.incrementCount} />
      );
    }
  }

  return NewC;
};

function ClickCounter({ count, incrementCount }) {
  return (
    <button type="button" onClick={incrementCount}>
      Clicked {count} times.
    </button>
  );
}

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState + 1 }));
  };

  render() {
    return this.props.children(this.state.count, this.incrementCount);
  }
}

function App() {
  return (
    <div>
      <Counter>
        {(count, incrementCount) => {
          <ClickCounter count={count} incrementCount={incrementCount} />;
        }}
      </Counter>
    </div>
  );
}
