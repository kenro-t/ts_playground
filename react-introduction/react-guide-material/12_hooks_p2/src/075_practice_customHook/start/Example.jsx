import useCount from "./hooks";

const Example = () => {
  const [countState, countUp] = useCount();
  return (
    <>
      <div>Counts: {countState}</div>
      <button onClick={() => countUp()}>Count Up!</button>
    </>
  );
};

export default Example;
