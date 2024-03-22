# myFlix-client

## Project Description

The client-side for an app called myMovie based on its existing server-side code (REST API and database).

## Project Dependencies

- React
- ReactDOM
- React-Router-Dom
- Bootstrap
- React-Bootstrap
- React-Bootstrap-Icons
- Prop-Types
- Moment
- Parcel/Transformer-Sass (v.2.10.2)
- Parcel (v.2.10.2)
- Process


## Corresponding API

- Movie API: https://github.com/Luisa-Inc/movie_api 
- Hosted version: https://myluisaflix.netlify.app/


## Views

- Main view: 
Returns a list of ALL movies to the user (each listed item with an image, title, and description) Sorting and filtering Ability to select a movie for more details

- Single movie view:
Returns data (description, genre, director, image) about a single movie to the user Allows users to add a movie to their list of favorites

- Login view:
Allows users to log in with a username and password Registration view Allows new users to register (username, password, email, birthday)

- Genre view:
Returns data about a genre, with a name and description Displays example movies

- Director view: 
Returns data about a director (name, bio, birth year, death year) Displays example movies

- Profile view:
Allows users to update their user info (username, password, email, date of birth) Allows existing users to deregister Displays favorite movies Allows users to remove a movie from their list of favorites

## Set up

- Clone this repository
- Navigate to the myFlix-client folder and run `npm install`
- Run `parcel src/index.html`