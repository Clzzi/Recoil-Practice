import { selector } from "recoil";

export const recoilStarCounterState = selector({ // selector의 get으로 비동기 로직 작성
  key: "asyncState",
  get: async () => { // get함수에서 async한 후 response변수에 await fetch로 github API보낸것을 받아옴
    const response = await fetch(
      "https://api.github.com/repos/facebookexperimental/Recoil"
    );
    const recoilProjectInfo = await response.json(); // github API로 받아온 것들을 response에 저장했으면 그것을 recoilProjectInfo에 json형태로 넣어줌
    // stargazer_count 반환
    return recoilProjectInfo["stargazers_count"]; // return은 json형식으로 만든 response에 stargazers_count라는 값을 리턴해줌
  },
});
