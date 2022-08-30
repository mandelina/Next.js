// 1. export default 로 내보내 주어야한다.
// 2. component이름은 상관 없음
// 3. 파일 명이 곧 라우팅 될 경로이름이 된다.
import Seo from "../components/Seo";
import NavBar from "../components/NavBar";

export default function about() {
  return (
    <div>
      <Seo title="About" />
      <p>about</p>
    </div>
  );
}
