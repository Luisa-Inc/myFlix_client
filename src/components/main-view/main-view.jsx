import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Silence of the Lambs",
      image:
        "https://www.imdb.com/title/tt0102926/mediaviewer/rm3533075712/?ref_=tt_ov_i",
      director: "Jonathan Demme",
      genre: "Thriller",
      description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer."
    },
    {
      id: 2,
      title: "The Lion King",
      image:
      "https://www.imdb.com/title/tt0110357/mediaviewer/rm3169350912/?ref_=tt_ov_i",
      director: "Rob Minkoff",
      genre: "Animated",
      description: "This Disney animated feature follows the adventures of the young lion Simba."
    },
    {
      id: 3,
      title: "Stuart Little",
      image:
        "https://www.imdb.com/title/tt0164912/mediaviewer/rm2978165504/?ref_=tt_ov_i",
      director: "Rob Minkoff",
      genre: "Comedy",
      description: "When the Littles go to an orphanage to adopt a new family member, a charming young mouse named Stuart is chosen."
    },
    {
      id: 4,
      title: "Knocked Up",
      image:
        "https://www.imdb.com/title/tt0478311/mediaviewer/rm2982937088/?ref_=tt_ov_i",
      director: "Judd Apatow",
      genre: "Comedy",
      description: "Ambitious Los Angeles reporter Alison Scott has just been given an on-air role with E! and lives in the guest house of her sister Debbie's family."
    },
    {
      id: 5,
      title: "Swimming to Cambodia",
      image:
        "https://www.imdb.com/title/tt0094089/mediaviewer/rm768029696/?ref_=tt_ov_i",
      director: "Jonathan Demme",
      genre: "Animated",
      description: "Swimming to Cambodia, also known as Spalding Gray's Swimming to Cambodia, is a 1987 American concert film. It was nominated for Best Feature, Best Director, Best Actor, and Best Screenplay at the 1988 Independent Spirit Awards."
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
