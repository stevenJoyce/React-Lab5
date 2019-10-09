import React from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends React.Component {
  
    state={
        movies:[ ]
           
    };

    componentDidMount() {
      axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
      .then((Response)=>{
        this.setState({movies:Response.data.Search});
      })
      .catch((error)=>{
        console.log(error);
      })
    
    }
  


  render(){
    return (
      <div>
        <h3>Read component</h3>
        <Movies myMovies={this.state.movies}></Movies>
      </div>
    );
  }
  
}

export default Read;