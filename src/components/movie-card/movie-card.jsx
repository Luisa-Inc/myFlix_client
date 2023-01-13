import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

// The MovieCard function component
export const MovieCard = ({ movie }) => {
  
  return (
    <Card className="h-100">
      <Card.Img crossOrigin="anonymous" variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>{movie.director.Name}</Card.Text>
        <Card.Text>{movie.genre.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button className="button-primary">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      birth: PropTypes.number,
    }),
    genre: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    description: PropTypes.string.isRequired,
  }).isRequired
};
