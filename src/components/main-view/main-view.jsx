import React from 'react';
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Silence of the Lambs",
      image:
        "https://www.themoviedb.org/t/p/original/9fSjFdLxyVFbSySTIwKwOhxlIOI.jpg",
      director: "Jonathan Demme",
      genre: "Thriller",
      description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer."
    },
    {
      id: 2,
      title: "The Lion King",
      image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzK5hNoRPkiTZdYpWMCiD5J5pwMnLVxnMCKftPXcOj5i0gouCb",
      director: "Rob Minkoff",
      genre: "Animated",
      description: "This Disney animated feature follows the adventures of the young lion Simba."
    },
    {
      id: 3,
      title: "Stuart Little",
      image:
        "https://www.themoviedb.org/t/p/w500/niZSfupE9XR7GmEUq2XdURVH66T.jpg",
      director: "Rob Minkoff",
      genre: "Comedy",
      description: "When the Littles go to an orphanage to adopt a new family member, a charming young mouse named Stuart is chosen."
    },
    {
      id: 4,
      title: "Knocked Up",
      image:
        "https://www.themoviedb.org/t/p/original/ad8w2i0mwXS3BzcvUzinnWC5BlP.jpg",
      director: "Judd Apatow",
      genre: "Comedy",
      description: "Ambitious Los Angeles reporter Alison Scott has just been given an on-air role with E! and lives in the guest house of her sister Debbie's family."
    },
    {
      id: 5,
      title: "Swimming to Cambodia",
      image:
        "https://www.themoviedb.org/t/p/w500/7AUoZQaWpRHzgyDntvTBVMggGzo.jpg",
      director: "Jonathan Demme",
      genre: "Animated",
      description: "Swimming to Cambodia, also known as Spalding Gray's Swimming to Cambodia, is a 1987 American concert film. It was nominated for Best Feature, Best Director, Best Actor, and Best Screenplay at the 1988 Independent Spirit Awards."
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://mighty-harbor-05233.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const moviesFromApi = data.map((doc) => {
          return {
            id: doc._id,
            title: doc.Title,
            image: doc.ImagePath,
            director: doc.Director,
            genre: doc.Genre,
            description: doc.Description,
          };
        });
      
        setMovies(moviesFromApi);
      
      });
  }, [token]);



if (!user) {
  return (
    <>
      <LoginView onLoggedIn={(user, token) => {
        setUser(user);
        setToken(token);
      }} />
      or
      <SignupView />
    </>
  );
}
  if (selectedMovie) {
    return (
      <>
        <button
          onClick={() => {
            setUser(null);
            setUser(null);
            setToken(null)
          }}
        >
          Logout
        </button>
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
      </>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear()
          }}
        >
          Logout
        </button>
        <div>The list is empty!</div>
      </>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear()
        }}
      >
        Logout
      </button>
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