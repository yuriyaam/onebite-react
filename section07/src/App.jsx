import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // useEffect(콜백함수, 변화를 캐치할 변수 배열)
  // useEffect는 배열에 의존적이라서 '변화를 캐치할 변수 배열'을 dependency array(deps)라고 부른다.

  // 1. 마운드 : 탄생
  // deps가 빈 배열인 경우 처음 렌더링하는 한번만 useEffect가 실행된다.
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // deps를 생략하면 리렌더링(업데이트) 될 때마다 useEffect가 실행된다.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log("update");
  });

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
