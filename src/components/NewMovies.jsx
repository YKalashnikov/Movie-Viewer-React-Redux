import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NewMovies.css';


 class NewMovies extends Component {


  componentDidMount() {
    const key = 'f6ccaeca60c5bdaae838b59ea75e2fcb';

    let todayDate = new Date();
    let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
    let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const movies = data.results;
          const { addNewMovies } = this.props;
          console.log('n',movies)
          addNewMovies(movies);
        });

      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      })
    }

    
   render(){
     const { movies } = this.props;
    return(
      
      <section>
        <h2>New releases</h2>
        <div className="newMovies">
          {! movies ? 'Loading...' : movies.map((movie, index) => {
            return (
              <Link to={`/movie/${movies[index].id}`} key={index} className="movieLink">
                <img src={movies[index].poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${movies[index].poster_path}`} alt={`${movies.title} poster`} className="imgResponsive" />

                <div className="movieInfo">
                  <h3>{movies[index].title}</h3>
                  <p>{movies[index].release_date}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    );
  }
 }


export default NewMovies;