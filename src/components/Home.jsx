import React from 'react';
import Header from "../components/Header.jsx"
import Form from "../components/Form.jsx";
import NewMovies from "../containers/NewMovies";

 class Home extends React.Component {
     render(){
         return (
              <div className="container">
             <Header/>
             <Form />
             <NewMovies/>
             </div>)
     }
 }
 export default Home