import React from 'react';
import {Link} from 'react-router-dom';
import  "./FormResult.css"


 class FormResults extends React.Component {


  handleClick() {
    document.getElementById('results').className = 'noDisplay';
    document.getElementById('searchInput').value = '';
  }

  render() {
    const link = 'https://image.tmdb.org/t/p/w300';
    return(
      <ul id="results" onClick={this.handleClick.bind(this)}>
        {this.props.results.map((element, index) => {
          return(
            <li key={index} onClick={this.handleClick}>
              <Link to={`/movie/${this.props.results[index].id}`} >
                <img src={this.props.results[index].poster_path === null ? 'http://via.placeholder.com/300x450' : `${link}${this.props.results[index].poster_path}`} alt={`${this.props.results[index].title} poster`} className="resultPoster" />
                <div>
                  <p>{this.props.results[index].title}</p>
                  <p>{this.props.results[index].release_date}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default FormResults