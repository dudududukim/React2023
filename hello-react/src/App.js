import logo from "./logo.svg"; //import로 다른파일 불러오기 가능
import "./App.css";
import { Fragment } from "react";

function App() {
  //App이라는 컴포넌트를 생성하고, return로 App을 하면 함수에서 반환하고 있는 내용을 보여준다
  const jsVariable = 1;
  const name = undefined;

  const style = {
    backgroundColor: "black",
    color: "aqua",
  };

  return (
    //이건 html도 문자열도 아닌 JSX 문법임
    <Fragment>
      <h1 className="reactColor">React</h1>
      <h2>넌 뒤졌다 {jsVariable === 1 && <h1 style={style}>진짜로</h1>}</h2>
      <h3>{name || "undefined입니다"}</h3>
      <input></input>
      <input /> {/* 이게 주석임 */}
    </Fragment>
  );
}

export default App;

// function App(){
//   return(
//     <div>
//       Hello <b>react</b>
//     </div>
//   );
// }

// function App(){
//   return React.createElement("div", null, "hello", React.createElement("b", null, "react"));
// }
