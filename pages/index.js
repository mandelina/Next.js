import { useEffect, useState } from "react";
import Seo from "../components/Seo";
// index는 기본 페이지

export default function Home() {
  const [movies, setMovies] = useState(); // 빈배열로 정의를 해서 밑의 map코드에서 에러가 나지 않도록
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      console.log(results);

      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>로딩중...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
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
