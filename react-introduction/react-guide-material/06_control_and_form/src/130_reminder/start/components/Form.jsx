const Form = ({inputVal, setInputVal}) => {
    return (
        <>
        <input type="text" value={inputVal} />
        <button onClick={(() => setInputVal)}>追加</button>
        </>
    );
}

export default Form;