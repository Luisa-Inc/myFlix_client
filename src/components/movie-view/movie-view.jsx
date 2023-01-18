import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, Row, Container } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const addFavorite = (movieId) => {
    if (!token) return;

    const url = `https://mighty-harbor-05233.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`;
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(url, requestOptions)
      .then((response) => {
      alert("Added to favorites!");
      return response.json();
    }).then(data => updateUser(data))
    .catch(err => {
        alert("Something went wrong");
    });
  };

  return (
    <Container className="cardset; content">
      <Row>
        <Card bg="dark" text="light">
          <Card.Header>
            <div className="title text-center">
              <span> {movie.title} </span>
            </div>
            <Button
              className="fav-btn"
              size="sm"
              variant="secondary"
              onClick={addFavorite(movie.id)}
            >
              Add to Favorites
            </Button>
          </Card.Header>
          <Card.Body>
            <div>
              <div>
                <Card.Img
                  className="cardimage"
                  crossOrigin="anonymous"
                  src={movie.image}
                />
              </div>
              <div>
                <span className="labeltitle">Description: </span>
                <span className="description">{movie.description}</span>
              </div>
              <div>
                <span className="labeltitle">Genre: </span>
                <span className="genre">{movie.genre.Name}</span>
              </div>
              <div>
                <span className="labeltitle">Director: </span>
                <span className="director">{movie.director.Name}</span>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to="/">
              <Button className="btn-login"> Back </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};
