import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export class GenreView extends React.Component {
  render() {
    const { movie, onBackClick, genreMovies } = this.props;

    return (
      <div>
        <Container className="genre-view">
          <Row>
            <Col className="label">Genre: </Col>
            <Col className="value">{movie.genre.Name}</Col>
          </Row>
          <Row>
            <Col className="label">Description: </Col>
            <Col className="value">{movie.genre.Description}</Col>
          </Row>
          <Row>
            <Col className="label">Other {movie.genre.Name} films: </Col>
            <Col className="value">
              {genreMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}>
                  {movie.Title}
                </MovieCard>
              ))}
            </Col>
          </Row>

          <Button
            className="mt-4"
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
        </Container>
      </div>
    );
  }
}
