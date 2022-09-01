// movies/121221 와 같은 경로
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || []; // 서버에서 router값을 받아올때까지 [] 로 설정
  console.log(router);

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
