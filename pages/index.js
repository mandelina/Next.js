import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
// index는 기본 페이지

export default function Home({ results }) {
  const [movies, setMovies] = useState(); // 빈배열로 정의를 해서 밑의 map코드에서 에러가 나지 않도록
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}` // url을 숨김
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h4>로딩중...</h4>}
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link href={`/movies/${movie.id}`}>
            <a>{movie.original_title}</a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // 이름 바꾸면 안됨!
  // 서버에서만 실행됨 , 클라이언트는 접근 불가
  // object를 리던한다.
  //서버사이드 렌더링!하는법
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
