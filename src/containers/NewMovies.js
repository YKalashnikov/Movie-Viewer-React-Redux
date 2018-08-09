import NewMovies from "../components/NewMovies"
import { connect } from 'react-redux';
import {addNewMovies} from "../actions/movies";


const mapStateToProps = ({movies}) => ({
      movies:movies.items
    })

const mapDispatchToProps = (dispatch) => ({
  addNewMovies: movie => dispatch(addNewMovies(movie))
        })

export default connect (mapStateToProps, mapDispatchToProps) (NewMovies)