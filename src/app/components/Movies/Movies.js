import React, { useEffect, useCallback, useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./Movies.scss";


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

    const movieAPI = useCallback(async() => {
      setLoading(true)
     const res = await fetch('https://academy-video-api.herokuapp.com/content/free-items', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    if (!res.ok) return setError("Error: something wrong");
      setMovies( await res.json());
      setLoading(false);
  }, [setError, setMovies, setLoading])

  useEffect(() => {
    movieAPI()
  }, [movieAPI])

  return (
    <div className="container movies-container">
      <div className="columns is-multiline">
        {error ? (
          <h3 className="has-text-danger has-text-centered">{error}</h3>
        ) : !loading && movies ? (
          movies.map((movie) => {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                description={movie.description.substring(0, 55)}
                image={movie.image}
              />
            );
          })
        ) : (
          <h3 className="has-text-white has-text-centered">
            Loading movies...
          </h3>
        )}
      </div>
      <div className="has-text-centered">
        <Button>Get More Content</Button>
      </div>
    </div>
  );

}

export default Movies;


// class Movies extends Component {
//   state = {
//     error: "",
//     loading: false,
//   };
//   async componentDidMount() {
//     this.setState({ loading: true });
//     const response = await fetch(
//       "https://academy-video-api.herokuapp.com/content/free-items",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) this.setState({ error: "Error while fetching movies" });
//     this.setState({ movies: await response.json() });
//     this.setState({ loading: false });
//   }
//   render() {
//     const { movies, error, loading } = this.state;

//     return (
//       <div className="container movies-container">
//         <div className="columns is-multiline">
//           {error ? (
//             <h3 className="has-text-danger has-text-centered">{error}</h3>
//           ) : !loading && movies ? (
//             movies.map((movie) => {
//               return (
//                 <Card
//                   key={movie.id}
//                   title={movie.title}
//                   description={movie.description.substring(0, 55)}
//                   image={movie.image}
//                 />
//               );
//             })
//           ) : (
//             <h3 className="has-text-white has-text-centered">
//               Loading movies...
//             </h3>
//           )}
//         </div>
//         <div className="has-text-centered">
//           <Button>Get More Content</Button>
//         </div>
//       </div>
//     );
//   }
// }


