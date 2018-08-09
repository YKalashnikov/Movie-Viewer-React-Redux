import React from 'react';
import FormResults from './FormResults';
import "./Form.css"
import search from '../images/movieicon.png'



 class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }

    const key = 'f6ccaeca60c5bdaae838b59ea75e2fcb';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log('Fetch Error:', err);
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)} id="form">
      <img src={search} alt="movie icon" className="searchIcon" />
        <input onKeyUp={this.handleKeyUp.bind(this)} id="searchInput" className="searchBar" type="text" autoComplete="off"  placeholder="Search a movie" required />
        <FormResults results={this.state.results} />
      </form>
    );
  }
}

export default Form;