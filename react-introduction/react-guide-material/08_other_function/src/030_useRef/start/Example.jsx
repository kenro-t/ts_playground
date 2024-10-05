import { useRef, useState } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef}/>
      <button onClick={() => {inputRef.current.focus()}}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState("");

  const videoRef = useRef();

  return (
    <div>
      <h3>ユースケース2</h3>
      <video src="./sample.mp4" style={{maxWidth:"100%"}} ref={videoRef}></video>
      <button onClick={() => {
        if(playing) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }

        setPlaying(ref => !ref);
      }}>
        {playing ? 'Stop' : 'Play' }
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
