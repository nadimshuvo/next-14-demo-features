function App() {
  const quantities = [1, 2, 3];

  return <ClockList quantities={quantities} />;
}

function ClockList({ quantities = [] }) {
  return (
    <div>
      {quantities.map((key) => {
        <Clock key={key} />;
      })}
    </div>
  );
}
