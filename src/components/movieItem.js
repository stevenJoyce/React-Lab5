import React from 'react';
import Card from 'react-bootstrap/Card';
class MovieItem extends React.Component {
    //The use of this.props calls the array data into the div and outputs it in order
    //<h4>{this.props.movie.Title}</h4>
    //<p>{this.props.movie.Year}</p>
    //<img src ={this.props.movie.Poster}></img> 
          
    render(){
        return (
          <div>
            <Card bg ="dark" text = "white">
                <Card.Header>{this.props.movie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src ={this.props.movie.Poster} alt="poster"></img>
                        <footer>
                        <p> {this.props.movie.Year} </p>
                        </footer>   
                    </blockquote>
                </Card.Body>
            </Card>
           </div> 
        );
      }
}

export default MovieItem;