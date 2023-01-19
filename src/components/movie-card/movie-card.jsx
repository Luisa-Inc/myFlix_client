import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

// The MovieCard function component
export const MovieCard = ({ movie }) => {
  return (
    <Container className="content">
      <Col class="col-sm d-flex">
        <Card className="flex-fill, moviecardview" bg="dark" text="light">
          <Card.Img variant="top" crossOrigin="anonymous" src={movie.image} />
          <Card.Body>
            <Card.Title className="title"> {movie.title} </Card.Title>
            <Card.Text className="description">
              Directed by {movie.director.Name}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
              <Button className="btn-login">Open</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Container>
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
  }).isRequired,
};
