import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import './reset.scss'; // 스타일 리셋용

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot> 
      {/* Recoil용 provider 느낌 */}
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
